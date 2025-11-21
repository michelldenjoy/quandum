// src/components/3d/ParticlesTextFromImage.jsx
import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";

// Breakpoints
const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};


const useResponsiveConfig = () => {
  
  const getConfig = useCallback(() => {
    const w = typeof window !== "undefined" ? window.innerWidth : 1024;
    const h = typeof window !== "undefined" ? window.innerHeight : 768;
    const aspectRatio = w / h;

    // responsive dispositivos cuadrados
    const isSquarish = aspectRatio > 0.7 && aspectRatio < 1.5;
    const squareCorrection = isSquarish ? 0.65 : 1;

    let baseConfig;
    if (w < BREAKPOINTS.sm) {
      baseConfig = { particleCount: 2500, particleSize: 1.8, scaleMultiplier: 0.55 };
    } else if (w < BREAKPOINTS.md) {
      baseConfig = { particleCount: 3500, particleSize: 2.0, scaleMultiplier: 0.60 };
    } else if (w < BREAKPOINTS.lg) {
      baseConfig = { particleCount: 5000, particleSize: 2.0, scaleMultiplier: 0.50 };
    } else if (w < BREAKPOINTS.xl) {
      baseConfig = { particleCount: 6000, particleSize: 2.1, scaleMultiplier: 0.55 };
    } else {
      baseConfig = { particleCount: 7500, particleSize: 2.2, scaleMultiplier: 0.70 };
    }

    return {
      ...baseConfig,
      scaleMultiplier: baseConfig.scaleMultiplier * squareCorrection,
      aspectRatio,
      isSquarish,
    };
  }, []); 

  
  const [config, setConfig] = useState(getConfig);

  useEffect(() => {
    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setConfig(getConfig()), 150);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeout);
    };
  }, [getConfig]); 

  return config;
};

export default function QuandumParticles({
  imgUrl = "/quandumletras.png",
  gatherDuration = 1800,
  parallaxIntensity = 0.15,
  enableParallax = true,
  opacity = 1,
}) {
  const mountRef = useRef(null);
  const rafRef = useRef(null);
  const scrollYRef = useRef(0);
  const cameraRef = useRef(null);
  const { particleCount, particleSize, scaleMultiplier } = useResponsiveConfig();

  // Parallax 
  useEffect(() => {
    if (!enableParallax) return;

    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enableParallax]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      4000
    );
    camera.position.z = 600;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.display = "block";
    renderer.domElement.style.pointerEvents = "none";
    mount.appendChild(renderer.domElement);

    let particleMesh;
    let particlesGeo;
    let particlesMat;
    let targetPositions = [];
    let basePositions = null;
    let startTime = null;
    let gathering = false;

    const loadImageTargets = (url) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const maxW = Math.min(img.width, 1200);
          const scale = maxW / img.width;
          canvas.width = Math.floor(img.width * scale);
          canvas.height = Math.floor(img.height * scale);
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

          const points = [];
          const step = Math.max(1, Math.floor(Math.sqrt((canvas.width * canvas.height) / particleCount)));

          for (let y = 0; y < canvas.height; y += step) {
            for (let x = 0; x < canvas.width; x += step) {
              const i = (y * canvas.width + x) * 4;
              const r = imgData[i];
              const g = imgData[i + 1];
              const b = imgData[i + 2];
              const a = imgData[i + 3];
              const brightness = (r + g + b) / 3;

              if (a > 128 && brightness > 60) {
                const nx = x - canvas.width / 2;
                const ny = -(y - canvas.height / 2);
                const scaleToScene =
                  Math.min(window.innerWidth, window.innerHeight) /
                  Math.max(canvas.width, canvas.height) *
                  scaleMultiplier;

                points.push(new THREE.Vector3(nx * scaleToScene, ny * scaleToScene, 0));
              }
            }
          }
          if (points.length === 0) return reject(new Error("No pixels found"));
          resolve(points);
        };
        img.onerror = reject;
        img.src = url;
      });

    const createParticles = (targetPoints) => {
      
      const targets = targetPoints.slice();
      while (targets.length < particleCount) {
        targets.push(targetPoints[targets.length % targetPoints.length].clone());
      }

      const used = [];
      if (targets.length > particleCount) {
        const stride = Math.floor(targets.length / particleCount);
        for (let i = 0; i < particleCount; i++) {
          used.push(targets[i * stride].clone());
        }
      } else {
        for (let i = 0; i < particleCount; i++) {
          used.push(targets[i].clone());
        }
      }

      particlesGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      basePositions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        const sx = (Math.random() - 0.5) * window.innerWidth * 1.6;
        const sy = (Math.random() - 0.5) * window.innerHeight * 1.6;
        const sz = (Math.random() - 0.5) * 800;
        positions[i * 3] = sx;
        positions[i * 3 + 1] = sy;
        positions[i * 3 + 2] = sz;
        basePositions[i * 3] = sx;
        basePositions[i * 3 + 1] = sy;
        basePositions[i * 3 + 2] = sz;
        colors[i * 3] = 0.0;
        colors[i * 3 + 1] = 0.78;
        colors[i * 3 + 2] = 1.0;
        targetPositions[i] = used[i];
      }

      particlesGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      particlesGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      particlesMat = new THREE.PointsMaterial({
        size: particleSize,
        vertexColors: true,
        transparent: true,
        opacity: 0.95,
        sizeAttenuation: true,
      });

      particleMesh = new THREE.Points(particlesGeo, particlesMat);
      scene.add(particleMesh);
    };

    const gatherParticles = (duration = gatherDuration) => {
      if (!particleMesh) return;
      startTime = performance.now();
      gathering = true;

      const startPositions = particlesGeo.attributes.position.array.slice();
      const targetArray = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        const t = targetPositions[i];
        targetArray[i * 3] = t.x;
        targetArray[i * 3 + 1] = t.y;
        targetArray[i * 3 + 2] = t.z;
      }

      const tick = () => {
        const now = performance.now();
        const elapsed = Math.min(1, (now - startTime) / duration);
        const ease = elapsed * elapsed * (3 - 2 * elapsed);
        const pos = particlesGeo.attributes.position.array;

        for (let i = 0; i < particleCount; i++) {
          const si = i * 3;
          pos[si] = startPositions[si] + (targetArray[si] - startPositions[si]) * ease;
          pos[si + 1] = startPositions[si + 1] + (targetArray[si + 1] - startPositions[si + 1]) * ease;
          pos[si + 2] = startPositions[si + 2] + (targetArray[si + 2] - startPositions[si + 2]) * ease;
        }
        particlesGeo.attributes.position.needsUpdate = true;

        if (elapsed < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          gathering = false;
        }
      };

      rafRef.current = requestAnimationFrame(tick);
    };

    const clock = new THREE.Clock();
    const baseCameraZ = 600;

    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);

      if (enableParallax && cameraRef.current) {
        const scrollOffset = scrollYRef.current * parallaxIntensity;
        cameraRef.current.position.y = -scrollOffset * 0.5;
        cameraRef.current.position.z = baseCameraZ + scrollOffset * 0.3;
      }

      if (particleMesh && !gathering) {
        const pos = particlesGeo.attributes.position.array;
        const t = clock.getElapsedTime();

        for (let i = 0; i < particleCount; i++) {
          const si = i * 3;
          const tx = targetPositions[i].x + Math.sin(t * 0.6 + i) * 0.6;
          const ty = targetPositions[i].y + Math.cos(t * 0.5 + i * 0.3) * 0.6;
          pos[si] = THREE.MathUtils.lerp(pos[si], tx, 0.06);
          pos[si + 1] = THREE.MathUtils.lerp(pos[si + 1], ty, 0.06);
        }
        particlesGeo.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    loadImageTargets(imgUrl)
      .then((points) => {
        createParticles(points);
        setTimeout(() => gatherParticles(), 250);
        animate();
      })
      .catch((err) => {
        console.error("Error loading image targets:", err);
      });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (particleMesh) {
        particleMesh.geometry.dispose();
        particleMesh.material.dispose();
        scene.remove(particleMesh);
      }
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [
    imgUrl,
    particleCount,
    particleSize,
    scaleMultiplier,
    gatherDuration,
    parallaxIntensity,
    enableParallax,
  ]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 w-screen h-screen pointer-events-none -z-10"
      style={{
        opacity,
        backgroundColor: "black",
        transition: "opacity 0.3s ease",
      }}
      aria-hidden="true"
    />
  );
}