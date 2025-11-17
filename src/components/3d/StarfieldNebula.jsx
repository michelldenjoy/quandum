import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function StarfieldNebula() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ESCENA
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 400, 2000);

    // CÁMARA
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      5000
    );
    camera.position.z = 500;

    // RENDERER
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // NEBULA
    const textureLoader = new THREE.TextureLoader();
    const nebulaTexture = textureLoader.load("/nebula-blue.jpg", () =>
      console.log("NEBULA CARGADA OK")
    );

    const nebulaMaterial = new THREE.MeshBasicMaterial({
      map: nebulaTexture,
      transparent: true,
      side: THREE.DoubleSide,
    });

    // Plano más grande para cubrir cualquier pantalla
    const nebulaPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(6000, 6000),
      nebulaMaterial
    );
    nebulaPlane.position.z = -1000; // siempre detrás
    scene.add(nebulaPlane);

    // ESTRELLAS
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 2000;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      starPositions[i] = (Math.random() - 0.5) * 3000;
    }
    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1.2,
      opacity: 0.8,
      transparent: true,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // ANIMACIÓN
    const animate = () => {
      stars.rotation.y += 0.0005;
      stars.rotation.x += 0.0002;
      nebulaPlane.rotation.z += 0.00005;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // RESPONSIVE
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    // CLEANUP
    return () => {
      window.removeEventListener("resize", onResize);
      if (mount.firstChild) mount.removeChild(renderer.domElement);
      renderer.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none -z-40"
    />
  );
}
