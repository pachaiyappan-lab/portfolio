import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';
import { skillsData } from '../../data/skills';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useWebGLSupport } from '../../hooks/useWebGLSupport';
import WebGLFallback from '../common/WebGLFallback';

function CelestialSkillSystem({ selectedSkill, onSelectSkill }) {
  const groupRef = useRef();
  const prefersReduced = useReducedMotion();

  useFrame((state, delta) => {
    if (prefersReduced) return;
    if (groupRef.current) {
      // Gentle orbital precession
      groupRef.current.rotation.y += delta * 0.15;
      // Slight responsive tilt to pointer
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        state.pointer.y * 0.25,
        0.05
      );
      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        -state.pointer.x * 0.2,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central CS foundation anchor */}
      <mesh>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
      
      {/* Glow halo */}
      <mesh scale={1.2}>
        <sphereGeometry args={[0.9, 16, 16]} />
        <meshBasicMaterial
          color="#9d4edd"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Orbit Rings and Satellites */}
      {skillsData.orbitNodes.map((node, index) => (
        <OrbitNode
          key={node.name}
          node={node}
          index={index}
          isSelected={selectedSkill?.name === node.name}
          onSelect={() => onSelectSkill(node)}
        />
      ))}
    </group>
  );
}

function OrbitNode({ node, index, isSelected, onSelect }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const prefersReduced = useReducedMotion();

  useFrame((state) => {
    if (!meshRef.current || prefersReduced) return;
    // Pause or slow orbit when hovered
    const speedMultiplier = hovered ? 0.15 : 1;
    const time = state.clock.getElapsedTime() * (node.speed * 0.7) * speedMultiplier;
    const angle = time + (index * ((Math.PI * 2) / skillsData.orbitNodes.length));
    
    meshRef.current.position.x = Math.cos(angle) * (node.distance * 0.85);
    meshRef.current.position.z = Math.sin(angle) * (node.distance * 0.85);
    meshRef.current.position.y = Math.sin(angle * 2) * 0.35;
  });

  return (
    <group>
      {/* Visual Orbit Guide Track */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[node.distance * 0.84, node.distance * 0.85, 64]} />
        <meshBasicMaterial
          color={node.color}
          transparent
          opacity={isSelected ? 0.45 : 0.15}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Floating Node */}
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
        }}
        scale={hovered || isSelected ? 1.4 : 1}
      >
        <sphereGeometry args={[node.size, 24, 24]} />
        <meshStandardMaterial
          color={node.color}
          emissive={node.color}
          emissiveIntensity={hovered || isSelected ? 1.4 : 0.6}
          roughness={0.1}
          metalness={0.9}
        />
        {(hovered || isSelected) && (
          <Text
            position={[0, node.size + 0.35, 0]}
            fontSize={0.28}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            {node.name}
          </Text>
        )}
      </mesh>
    </group>
  );
}

export default function SkillOrbit() {
  const [selectedSkill, setSelectedSkill] = useState(skillsData.orbitNodes[0]);
  const isWebGLSupported = useWebGLSupport();

  if (!isWebGLSupported) {
    return <WebGLFallback title="Interactive 3D Skill Visualization" />;
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '480px' }} data-cursor="3d">
      <Canvas
        camera={{ position: [0, 4, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.8} color="#00f0ff" />
        <pointLight position={[-10, 5, -10]} intensity={1.5} color="#9d4edd" />
        <Suspense fallback={null}>
          <CelestialSkillSystem
            selectedSkill={selectedSkill}
            onSelectSkill={(node) => setSelectedSkill(node)}
          />
        </Suspense>
      </Canvas>

      {/* Interactive Detail Overlay Card */}
      {selectedSkill && (
        <div
          className="glass-panel"
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '50%',
            transform: 'translateX(-50%)',
            maxWidth: '380px',
            width: '90%',
            padding: '14px 20px',
            borderRadius: 'var(--radius-md)',
            border: `1px solid ${selectedSkill.color}55`,
            boxShadow: `0 8px 32px rgba(0, 0, 0, 0.6), 0 0 20px ${selectedSkill.color}33`,
            backdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            zIndex: 10
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: `${selectedSkill.color}22`,
              border: `2px solid ${selectedSkill.color}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              fontWeight: 800,
              color: selectedSkill.color,
              flexShrink: 0
            }}
          >
            {selectedSkill.name.charAt(0)}
          </div>
          <div>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '2px' }}>
              {selectedSkill.name}
            </h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.3 }}>
              {selectedSkill.desc}
            </p>
          </div>
        </div>
      )}

      {/* Helper notice */}
      <div
        style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          fontSize: '0.72rem',
          fontFamily: 'var(--font-mono)',
          color: 'var(--text-muted)',
          background: 'rgba(5, 5, 8, 0.7)',
          padding: '4px 10px',
          borderRadius: '999px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          pointerEvents: 'none'
        }}
      >
        CLICK NODES TO INSPECT
      </div>
    </div>
  );
}
