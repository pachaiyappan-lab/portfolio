import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Wireframe } from '@react-three/drei';
import * as THREE from 'three';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useWebGLSupport } from '../../hooks/useWebGLSupport';

function AgroNeuralModel() {
  const meshRef = useRef();
  const gridRef = useRef();
  const prefersReduced = useReducedMotion();

  useFrame((state, delta) => {
    if (prefersReduced) return;
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        state.pointer.y * 0.4,
        0.05
      );
    }
    if (gridRef.current) {
      gridRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <group>
      {/* Central 3D Leaf/Neural Core Geometry */}
      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh ref={meshRef}>
          <octahedronGeometry args={[1.6, 2]} />
          <meshStandardMaterial
            color="#10b981"
            emissive="#059669"
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.8}
            wireframe={false}
          />
        </mesh>
      </Float>

      {/* Holographic Diagnostic Scanning Grid */}
      <mesh ref={gridRef} rotation={[-Math.PI / 3, 0, 0]} position={[0, -0.8, 0]}>
        <ringGeometry args={[1.8, 2.5, 32]} />
        <meshBasicMaterial
          color="#00f0ff"
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Data Sensor Nodes */}
      {[-1.2, 0, 1.2].map((x, i) => (
        <mesh key={i} position={[x, Math.sin(i * 1.5) * 0.8, 0.5]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color="#34d399"
            emissive="#34d399"
            emissiveIntensity={1.5}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function FeaturedProject3D() {
  const isWebGL = useWebGLSupport();

  if (!isWebGL) {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        minHeight: '320px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(16, 185, 129, 0.1)',
        borderRadius: 'var(--radius-lg)'
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', color: '#10b981' }}>[AI NEURAL SCANNER READY]</span>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '100%', minHeight: '340px' }} data-cursor="3d">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 8, 5]} intensity={1.5} color="#34d399" />
        <pointLight position={[-5, -5, -5]} intensity={1} color="#00f0ff" />
        <Suspense fallback={null}>
          <AgroNeuralModel />
        </Suspense>
      </Canvas>
    </div>
  );
}
