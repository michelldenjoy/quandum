import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function EarthGlobe({ size = 300 }) {
  const mountRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      5000
    );
    camera.position.set(0, 0, size * 2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Luces
    scene.add(new THREE.AmbientLight(0x888888));
    const sun = new THREE.DirectionalLight(0xffffff, 1.0);
    sun.position.set(5, 3, 5);
    scene.add(sun);

    // Texturas
    const loader = new THREE.TextureLoader();
    const dayTex = loader.load("/earth_daymap.jpg");
    const nightTex = loader.load("/earth_night.jpg");
    const cloudsTex = loader.load("/earth_clouds.png");

    // Esfera Tierra
    const earthGeo = new THREE.SphereGeometry(size, 64, 64);

    // Shader para mezclar
    const earthMat = new THREE.ShaderMaterial({
      uniforms: {
        uDay: { value: dayTex },
        uNight: { value: nightTex },
        uClouds: { value: cloudsTex },
        uLightDir: { value: sun.position.clone().normalize() },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec2 vUv;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uDay;
        uniform sampler2D uNight;
        uniform sampler2D uClouds;
        uniform vec3 uLightDir;
        varying vec3 vNormal;
        varying vec2 vUv;

        void main() {
          float ndotl = dot(vNormal, uLightDir);
          // parte día si la normal apunta al sol, noche si no
          vec3 dayColor = texture(uDay, vUv).rgb;
          vec3 nightColor = texture(uNight, vUv).rgb;

          // mezcla según el ángulo con el sol
          float mixFactor = clamp(ndotl * 0.5 + 0.5, 0.0, 1.0);

          vec3 color = mix(nightColor, dayColor, mixFactor);

          // añadir nubes encima
          vec4 cloud = texture(uClouds, vUv);
          color = mix(color, cloud.rgb, cloud.a * 0.5);

          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });

    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    scene.add(earthMesh);

    // Animación
    const animate = () => {
      earthMesh.rotation.y += 0.0005;
      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    // Resize
    window.addEventListener("resize", () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    });

    return () => {
      cancelAnimationFrame(rafRef.current);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [size]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full pointer-events-none absolute inset-0"
    />
  );
}
