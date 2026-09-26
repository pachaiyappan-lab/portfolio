import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Wireframe } from '@react-three/drei';
import * as THREE from 'three';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import WebGLFallback from '../common/WebGLFallback';
import { useWebGLSupport } from '../../hooks/useWebGLSupport';

// Floating abstract cyber core
function CyberCore({ mousePos }) {
  const meshRef = useRef();
  const ringRef = useRef();
  const outerRingRef = useRef();
  const [hovered, setHovered] = useState(false);
  const prefersReduced = useReducedMotion();

  useFrame((state, delta) => {
    if (prefersReduced) return;

    // Smooth continuous rotation
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.y += delta * 0.5;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x -= delta * 0.3;
      ringRef.current.rotation.z += delta * 0.4;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.y += delta * 0.25;
      outerRingRef.current.rotation.z -= delta * 0.35;
    }

    // Reaction to pointer
    if (meshRef.current) {
      const targetX = (state.pointer.x * Math.PI) / 6;
      const targetY = (state.pointer.y * Math.PI) / 6;
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, state.pointer.x * 0.5, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, state.pointer.y * 0.5, 0.05);
    }
  });

  return (
    <group>
      {/* Central pulsating glowing sphere */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <mesh
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          scale={hovered ? 1.15 : 1}
        >
          <icosahedronGeometry args={[1.5, 1]} />
          <MeshDistortMaterial
            color={hovered ? "#00f0ff" : "#7928ca"}
            emissive={hovered ? "#00f0ff" : "#43126f"}
            emissiveIntensity={hovered ? 0.7 : 0.3}
            roughness={0.15}
            metalness={0.85}
            distort={0.35}
            speed={2}
          />
        </mesh>
      </Float>

      {/* Cyber Inner Wireframe Ring */}
      <mesh ref={ringRef} scale={2.4}>
        <torusGeometry args={[1, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={0.8}
          wireframe
        />
      </mesh>

      {/* Outer Gyro Ring */}
      <mesh ref={outerRingRef} scale={2.85}>
        <torusGeometry args={[1, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#f72585"
          emissive="#f72585"
          emissiveIntensity={0.9}
        />
      </mesh>

      {/* Orbiting Satellite Data Spheres */}
      <SatelliteOrbit radius={2.2} speed={1.2} color="#00f0ff" size={0.12} />
      <SatelliteOrbit radius={2.6} speed={-0.9} color="#ffd166" size={0.14} />
      <SatelliteOrbit radius={3.1} speed={0.7} color="#06d6a0" size={0.11} />
    </group>
  );
}

function SatelliteOrbit({ radius, speed, color, size }) {
  const satRef = useRef();

  useFrame((state) => {
    if (!satRef.current) return;
    const t = state.clock.getElapsedTime() * speed;
    satRef.current.position.x = Math.cos(t) * radius;
    satRef.current.position.z = Math.sin(t) * radius;
    satRef.current.position.y = Math.sin(t * 2) * 0.5;
  });

  return (
    <mesh ref={satRef}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.2}
      />
    </mesh>
  );
}

export default function HeroScene() {
  const isWebGLSupported = useWebGLSupport();

  if (!isWebGLSupported) {
    return <WebGLFallback title="Holographic Developer Workspace" />;
  }

  return (
    <div
      data-cursor="3d"
      style={{
        width: '100%',
        height: '100%',
        minHeight: '420px',
        position: 'relative'
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f0ff" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#9d4edd" />
        <pointLight position={[0, 5, -5]} intensity={1} color="#f72585" />
        <Suspense fallback={null}>
          <CyberCore />
        </Suspense>
      </Canvas>

      {/* Floating 3D Control Tag */}
      <div
        style={{
          position: 'absolute',
          bottom: '12px',
          right: '12px',
          background: 'rgba(5, 5, 8, 0.75)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(0, 240, 255, 0.25)',
          padding: '4px 10px',
          borderRadius: '999px',
          fontSize: '0.72rem',
          fontFamily: 'var(--font-mono)',
          color: 'var(--accent-cyan)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          pointerEvents: 'none'
        }}
      >
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00f0ff', display: 'inline-block' }} />
        <span>INTERACTIVE 3D MESH</span>
      </div>
    </div>
  );
}
