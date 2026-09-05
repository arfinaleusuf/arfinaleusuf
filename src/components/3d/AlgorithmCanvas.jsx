import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

export default function AlgorithmCanvas() {
  const mountRef = useRef(null);
  const { isDark } = useTheme();
  const materialsRef = useRef({});

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold our algorithmic structures
    const graphGroup = new THREE.Group();
    scene.add(graphGroup);

    // 1. Core Polyhedron (Algorithm Core / Icosahedron wireframe)
    const icosahedronGeo = new THREE.IcosahedronGeometry(1.8, 1);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x6366f1, // Indigo
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const icosahedronMesh = new THREE.Mesh(icosahedronGeo, wireframeMat);
    graphGroup.add(icosahedronMesh);

    // 2. Glowing Vertices (Graph Nodes)
    const positions = icosahedronGeo.attributes.position.array;
    const nodeGeometry = new THREE.SphereGeometry(0.065, 8, 8);
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4, // Cyan
    });

    const nodeInstanced = new THREE.InstancedMesh(
      nodeGeometry,
      nodeMaterial,
      positions.length / 3
    );

    const dummy = new THREE.Object3D();
    for (let i = 0; i < positions.length; i += 3) {
      dummy.position.set(positions[i], positions[i + 1], positions[i + 2]);
      dummy.updateMatrix();
      nodeInstanced.setMatrixAt(i / 3, dummy.matrix);
    }
    nodeInstanced.instanceMatrix.needsUpdate = true;
    graphGroup.add(nodeInstanced);

    // 3. Inner Algorithmic Core (Octahedron)
    const innerGeo = new THREE.OctahedronGeometry(0.9, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x10b981, // Emerald
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    graphGroup.add(innerMesh);

    // 4. Orbital Floating Data Particles
    const particleCount = 80;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 2.4 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePos[i] = radius * Math.sin(phi) * Math.cos(theta);
      particlePos[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePos[i + 2] = radius * Math.cos(phi);
    }

    particleGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePos, 3)
    );

    const particleMat = new THREE.PointsMaterial({
      size: 0.055,
      color: 0x818cf8,
      transparent: true,
      opacity: 0.85,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    graphGroup.add(particles);

    materialsRef.current = {
      wireframeMat,
      nodeMaterial,
      innerMat,
      particleMat,
    };

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;

      mouseX = (x / rect.width) * 2;
      mouseY = -(y / rect.height) * 2;

      targetRotationY = mouseX * 0.8;
      targetRotationX = -mouseY * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Autonomous rotation
      icosahedronMesh.rotation.y = elapsedTime * 0.15;
      icosahedronMesh.rotation.x = elapsedTime * 0.1;

      innerMesh.rotation.y = -elapsedTime * 0.3;
      innerMesh.rotation.z = elapsedTime * 0.2;

      particles.rotation.y = elapsedTime * 0.08;
      nodeInstanced.rotation.y = elapsedTime * 0.15;
      nodeInstanced.rotation.x = elapsedTime * 0.1;

      // Smooth mouse follow interpolation
      graphGroup.rotation.y += (targetRotationY - graphGroup.rotation.y) * 0.05;
      graphGroup.rotation.x += (targetRotationX - graphGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      icosahedronGeo.dispose();
      wireframeMat.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  // Update materials when dark/light theme changes
  useEffect(() => {
    const { wireframeMat, nodeMaterial, innerMat, particleMat } = materialsRef.current;
    if (!wireframeMat) return;

    if (isDark) {
      wireframeMat.color.setHex(0x6366f1);
      wireframeMat.opacity = 0.28;
      nodeMaterial.color.setHex(0x06b6d4);
      innerMat.color.setHex(0x10b981);
      innerMat.opacity = 0.45;
      particleMat.color.setHex(0x818cf8);
      particleMat.opacity = 0.85;
    } else {
      wireframeMat.color.setHex(0x4f46e5);
      wireframeMat.opacity = 0.55;
      nodeMaterial.color.setHex(0x0891b2);
      innerMat.color.setHex(0x059669);
      innerMat.opacity = 0.65;
      particleMat.color.setHex(0x6366f1);
      particleMat.opacity = 0.9;
    }
  }, [isDark]);

  return (
    <div className="relative w-full h-[280px] sm:h-[400px] lg:h-[480px] flex items-center justify-center">
      {/* Three.js Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />

      {/* Decorative Overlays */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 font-mono text-[10px] sm:text-[11px] text-cyan-700 dark:text-cyan-400 bg-white/90 dark:bg-slate-900/70 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-cyan-500/30 dark:border-cyan-500/20 shadow-xs pointer-events-none">
        <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 mr-1.5 animate-pulse" />
        DSA::Graph_Matrix (V=12, E=30)
      </div>

      <div className="hidden sm:block absolute bottom-4 right-4 font-mono text-[11px] text-indigo-700 dark:text-indigo-400 bg-white/90 dark:bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-indigo-500/30 dark:border-indigo-500/20 shadow-xs pointer-events-none">
        Time: O(V + E) | Space: O(V)
      </div>
    </div>
  );
}
