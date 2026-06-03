import { useEffect, useRef } from "react";
import * as THREE from "three";

function createGlintTexture() {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const cx = size / 2;
  const cy = size / 2;

  ctx.globalCompositeOperation = "lighter";

  const spikes = [
    { angle: 0,          length: size * 0.48, width: 1.2 },
    { angle: Math.PI/2,  length: size * 0.48, width: 1.2 },
    { angle: Math.PI/4,  length: size * 0.22, width: 0.7 },
    { angle: -Math.PI/4, length: size * 0.22, width: 0.7 },
  ];

  for (const { angle, length, width } of spikes) {
    for (let dir = 0; dir < 2; dir++) {
      const a = angle + dir * Math.PI;
      const ex = cx + Math.cos(a) * length;
      const ey = cy + Math.sin(a) * length;
      const grad = ctx.createLinearGradient(cx, cy, ex, ey);
      grad.addColorStop(0,    "rgba(255, 255, 255, 0.9)");
      grad.addColorStop(0.15, "rgba(200, 220, 255, 0.5)");
      grad.addColorStop(0.5,  "rgba(180, 210, 255, 0.15)");
      grad.addColorStop(1,    "rgba(0, 0, 0, 0)");
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(a);
      ctx.translate(-cx, -cy);
      ctx.beginPath();
      ctx.moveTo(cx, cy - width);
      ctx.lineTo(cx + length, cy);
      ctx.lineTo(cx, cy + width);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();
    }
  }

  const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, size * 0.1);
  core.addColorStop(0,   "rgba(255, 255, 255, 1)");
  core.addColorStop(0.4, "rgba(220, 235, 255, 0.8)");
  core.addColorStop(1,   "rgba(0, 0, 0, 0)");
  ctx.beginPath();
  ctx.arc(cx, cy, size * 0.1, 0, Math.PI * 2);
  ctx.fillStyle = core;
  ctx.fill();

  const halo = ctx.createRadialGradient(cx, cy, 0, cx, cy, size * 0.3);
  halo.addColorStop(0, "rgba(180, 210, 255, 0.12)");
  halo.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.beginPath();
  ctx.arc(cx, cy, size * 0.3, 0, Math.PI * 2);
  ctx.fillStyle = halo;
  ctx.fill();

  return new THREE.CanvasTexture(canvas);
}

// Crea una estrella fugaz: cabeza brillante + estela que se desvanece
function createShootingStar(scene) {
  const group = new THREE.Group();

  // Dirección aleatoria diagonal (siempre hacia abajo-derecha o abajo-izquierda)
  const angle = (Math.random() * 0.6 + 0.2) * Math.PI; // entre ~36° y ~108° desde horizontal
  const dir = new THREE.Vector3(Math.cos(angle), -Math.abs(Math.sin(angle)), (Math.random() - 0.5) * 0.3).normalize();

  const tailLength = 80 + Math.random() * 120;
  const tailSegments = 20;

  // Geometría de la estela con colores que se desvanecen
  const points = [];
  const colors = [];
  for (let i = 0; i <= tailSegments; i++) {
    const t = i / tailSegments;
    points.push(new THREE.Vector3(
      dir.x * tailLength * t,
      dir.y * tailLength * t,
      dir.z * tailLength * t
    ));
    // Cabeza blanca, cola azulada y transparente
    const fade = 1 - t;
    colors.push(fade, fade, Math.min(1, fade + 0.2)); // leve tinte azul en la estela
  }

  const tailGeo = new THREE.BufferGeometry().setFromPoints(points);
  tailGeo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  const tailMat = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 1,
    linewidth: 1,
  });
  const tail = new THREE.Line(tailGeo, tailMat);
  group.add(tail);

  // Posición de inicio: borde superior del "campo visible"
  const spread = 800;
  group.position.set(
    (Math.random() - 0.5) * spread,
    200 + Math.random() * 200,
    (Math.random() - 0.5) * 300
  );

  scene.add(group);

  return {
    group,
    tailMat,
    tailGeo,
    dir,
    speed: 4 + Math.random() * 4,
    life: 0.6,       // 0 → 1
    maxLife: 1.2,  // un poco más de 1 para que acabe de desaparecer
  };
}

export default function StarfieldNebula() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 200, 1900);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      5000
    );
    camera.position.z = 500;

    const renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true });
    renderer.setClearColor(0x000000, 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // --- ESTRELLAS DE FONDO ---
    const starTexture = createGlintTexture();
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 5000;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      starPositions[i] = (Math.random() - 0.5) * 2200;
    }
    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 8,
      map: starTexture,
      transparent: true,
      alphaTest: 0.005,
      depthWrite: false,
      opacity: 0.95,
      sizeAttenuation: true,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // --- ESTRELLAS FUGACES ---
    const shootingStars = [];
    let nextSpawn = 2 + Math.random() * 7; // segundos hasta la próxima
    let elapsed = 0;
    let lastTime = performance.now();

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      const now = performance.now();
      const delta = (now - lastTime) / 1000;
      lastTime = now;
      elapsed += delta;

      // Rotación del cielo
      stars.rotation.y += 0.0005;
      stars.rotation.x += 0.0002;

      // Lanzar nueva estrella fugaz
      if (elapsed >= nextSpawn) {
        elapsed = 0;
        nextSpawn = 3 + Math.random() * 5;
        shootingStars.push(createShootingStar(scene));
      }

      // Actualizar estrellas fugaces
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.life += delta / 1.5; // duración total ~1.5s

        // Mover la cabeza
        s.group.position.addScaledVector(s.dir, s.speed * delta * 60);

        // Desvanecer la estela al final
        const fade = s.life < 0.7 ? 1 : 1 - ((s.life - 0.7) / 0.5);
        s.tailMat.opacity = Math.max(0, fade);

        if (s.life >= 1.2) {
          scene.remove(s.group);
          s.tailGeo.dispose();
          s.tailMat.dispose();
          shootingStars.splice(i, 1);
        }
      }

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      renderer.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      starTexture.dispose();
      shootingStars.forEach(s => {
        scene.remove(s.group);
        s.tailGeo.dispose();
        s.tailMat.dispose();
      });
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none -z-40"
    />
  );
}