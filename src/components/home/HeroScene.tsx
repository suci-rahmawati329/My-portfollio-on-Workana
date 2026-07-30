"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, Float } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Group, Mesh } from "three";

function Sculpture() {
  const group = useRef<Group>(null);
  const ring = useRef<Mesh>(null);
  const core = useRef<Mesh>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const targetX = state.pointer.x * 0.35;
    const targetY = state.pointer.y * 0.2;
    pointer.current.x += (targetX - pointer.current.x) * 0.05;
    pointer.current.y += (targetY - pointer.current.y) * 0.05;

    if (group.current) {
      group.current.rotation.y = t * 0.18 + pointer.current.x;
      group.current.rotation.x = 0.25 + pointer.current.y * 0.4;
    }
    if (ring.current) {
      ring.current.rotation.z = t * 0.35;
      ring.current.rotation.x = Math.sin(t * 0.4) * 0.2;
    }
    if (core.current) {
      core.current.position.y = Math.sin(t * 0.9) * 0.08;
    }
  });

  return (
    <group ref={group} position={[0.15, 0.1, 0]} scale={1.15}>
      <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.5}>
        <mesh ref={core} castShadow>
          <icosahedronGeometry args={[1.05, 1]} />
          <meshStandardMaterial color="#1f6b5c" metalness={0.55} roughness={0.28} />
        </mesh>

        <mesh ref={ring} castShadow rotation={[Math.PI / 2.4, 0.2, 0.1]}>
          <torusGeometry args={[1.55, 0.045, 32, 120]} />
          <meshStandardMaterial color="#c4a574" metalness={0.7} roughness={0.22} />
        </mesh>

        <mesh
          castShadow
          position={[0.95, 0.55, 0.45]}
          rotation={[0.4, -0.3, 0.2]}
        >
          <octahedronGeometry args={[0.28, 0]} />
          <meshStandardMaterial color="#1c2430" metalness={0.35} roughness={0.45} />
        </mesh>

        <mesh castShadow position={[-1.05, -0.35, 0.35]}>
          <sphereGeometry args={[0.18, 32, 32]} />
          <meshStandardMaterial color="#c4a574" metalness={0.7} roughness={0.22} />
        </mesh>
      </Float>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight
        castShadow
        position={[4, 6, 3]}
        intensity={1.35}
        color="#fff6ea"
      />
      <directionalLight position={[-3, 2, -2]} intensity={0.45} color="#9ec9bf" />
      <Suspense fallback={null}>
        <Sculpture />
        <Environment preset="city" environmentIntensity={0.45} />
        <ContactShadows
          position={[0, -1.55, 0]}
          opacity={0.35}
          scale={8}
          blur={2.8}
          far={4}
        />
      </Suspense>
    </>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        className="h-full w-full"
        dpr={[1, 1.75]}
        camera={{ position: [0, 0.2, 4.2], fov: 38 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
