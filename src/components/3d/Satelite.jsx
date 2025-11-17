import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Satelite({
  satelliteCount = 8,
  orbitRadiusMin = 400,
  orbitRadiusMax = 1200,
}) {
  const mountRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // SCENE / CAMERA / RENDERER
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // fallback if page bg shows through

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      5000
    );
    camera.position.set(0, 200, 800);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    // LIGHTS
    const ambient = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffffff, 0.6);
    keyLight.position.set(1000, 1000, 800);
    scene.add(keyLight);

    // STARS background (lightweight)
    const starsGeo = new THREE.BufferGeometry();
    const starsCount = 1200;
    const starVerts = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount * 3; i++) {
      starVerts[i] = (Math.random() - 0.5) * 5000;
    }
    starsGeo.setAttribute("position", new THREE.BufferAttribute(starVerts, 3));
    const starsMat = new THREE.PointsMaterial({ color: 0xffffff, size: 1, opacity: 0.9, transparent: true });
    const stars = new THREE.Points(starsGeo, starsMat);
    scene.add(stars);

    // Shared geometries & materials for satellites
    const bodyGeo = new THREE.BoxGeometry(18, 10, 10);
    const panelGeo = new THREE.PlaneGeometry(40, 12);

    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0xd0d6df,
      metalness: 0.9,
      roughness: 0.25,
    });

    const panelMat = new THREE.MeshStandardMaterial({
      color: 0x0f4e78,
      metalness: 0.2,
      roughness: 0.4,
      emissive: 0x083246,
      emissiveIntensity: 0.08,
      side: THREE.DoubleSide,
    });

    // create satellite group container
    const satellites = [];

    for (let i = 0; i < satelliteCount; i++) {
      const satGroup = new THREE.Group();

      // body
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      body.castShadow = false;
      body.receiveShadow = false;
      satGroup.add(body);

      // two panels (left/right)
      const panelL = new THREE.Mesh(panelGeo, panelMat);
      panelL.position.set(-29, 0, 0);
      panelL.rotation.y = Math.PI / 2;
      satGroup.add(panelL);

      const panelR = panelL.clone();
      panelR.position.set(29, 0, 0);
      satGroup.add(panelR);

      // small emissive light to act like a beacon
      const beacon = new THREE.PointLight(0x88d4ff, 0.6, 200);
      beacon.position.set(0, -6, 6);
      satGroup.add(beacon);

      // orbital parameters
      const radius = THREE.MathUtils.lerp(orbitRadiusMin, orbitRadiusMax, Math.random());
      const speed = THREE.MathUtils.lerp(0.0004, 0.0016, Math.random()) * (Math.random() > 0.5 ? 1 : -1);
      const inclination = THREE.MathUtils.degToRad(THREE.MathUtils.randFloatSpread(50)); // tilt
      const phase = Math.random() * Math.PI * 2;

      satGroup.userData = { radius, speed, inclination, phase, angle: phase, tilt: (Math.random() - 0.5) * 0.6 };

      // initial position
      satGroup.position.set(
        Math.cos(phase) * radius,
        Math.sin(inclination) * (radius * 0.15),
        Math.sin(phase) * radius
      );

      scene.add(satGroup);
      satellites.push(satGroup);
    }

    // subtle orbit center motion for realism
    let time = 0;

    const animate = () => {
      time += 0.5;
      // rotate starfield slowly
      stars.rotation.y += 0.00005;

      // animate satellites
      for (let i = 0; i < satellites.length; i++) {
        const s = satellites[i];
        s.userData.angle += s.userData.speed;
        const a = s.userData.angle;
        const r = s.userData.radius;
        const inc = s.userData.inclination;
        // compute orbit position (inclined ellipse-ish)
        const x = Math.cos(a) * r;
        const z = Math.sin(a) * r;
        const y = Math.sin(inc + a * 0.12) * (r * 0.08); // small vertical oscillation
        s.position.set(x, y, z);
        // make satellite slowly rotate on its axis
        s.rotation.x = Math.sin(time * 0.0008 + i) * 0.2;
        s.rotation.z = s.userData.tilt;
      }

      // small camera bob for life
      camera.position.x = Math.sin(time * 0.0002) * 20;
      camera.position.y = 200 + Math.sin(time * 0.00015) * 8;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

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
      cancelAnimationFrame(rafRef.current);
      // remove children and dispose
      satellites.forEach((s) => {
        s.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          if (o.material) {
            if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose());
            else o.material.dispose();
          }
        });
        scene.remove(s);
      });

      starsGeo.dispose();
      starsMat.dispose();

      bodyGeo.dispose();
      panelGeo.dispose();
      // bodyMat & panelMat are shared; dispose them
      bodyMat.dispose();
      panelMat.dispose();

      renderer.dispose();
      if (mount.firstChild) mount.removeChild(renderer.domElement);
    };
  }, [satelliteCount, orbitRadiusMin, orbitRadiusMax]);

  return (
    <div
      ref={mountRef}
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none -z-40"
      aria-hidden="true"
    />
  );
}
