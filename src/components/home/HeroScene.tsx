"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Float,
  MeshDistortMaterial,
  Sparkles,
} from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import type { Group, Mesh, Points } from "three";

function usePointerLag(amount = 0.06) {
  const pointer = useRef({ x: 0, y: 0 });
  useFrame((state) => {
    pointer.current.x += (state.pointer.x - pointer.current.x) * amount;
    pointer.current.y += (state.pointer.y - pointer.current.y) * amount;
  });
  return pointer;
}

function ParticleField({ count = 180 }: { count?: number }) {
  const points = useRef<Points>(null);
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const r = 2.2 + Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.7;
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    geo.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    return geo;
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.elapsedTime * 0.04;
    points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.12) * 0.08;
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        size={0.018}
        color="#5f8f84"
        sizeAttenuation
        transparent
        opacity={0.55}
        depthWrite={false}
      />
    </points>
  );
}

function OrbitingNodes() {
  const group = useRef<Group>(null);
  const items = useMemo(
    () =>
      [
        { radius: 1.85, speed: 0.55, size: 0.11, color: "#c4a574", y: 0.15 },
        { radius: 2.15, speed: -0.35, size: 0.09, color: "#1c2430", y: -0.25 },
        { radius: 1.55, speed: 0.75, size: 0.07, color: "#2f8f7a", y: 0.45 },
        { radius: 2.35, speed: 0.28, size: 0.08, color: "#d7c4a0", y: -0.05 },
      ] as const,
    [],
  );

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.children.forEach((child, i) => {
      const item = items[i];
      const a = t * item.speed + i * 1.2;
      child.position.set(
        Math.cos(a) * item.radius,
        item.y + Math.sin(a * 1.4) * 0.18,
        Math.sin(a) * item.radius,
      );
      child.rotation.x = t * 0.6 + i;
      child.rotation.y = t * 0.4 + i * 0.5;
    });
  });

  return (
    <group ref={group}>
      {items.map((item) => (
        <mesh key={`${item.color}-${item.radius}`} castShadow>
          <octahedronGeometry args={[item.size, 0]} />
          <meshStandardMaterial
            color={item.color}
            metalness={0.75}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

function Sculpture() {
  const root = useRef<Group>(null);
  const core = useRef<Mesh>(null);
  const wire = useRef<Mesh>(null);
  const ringA = useRef<Mesh>(null);
  const ringB = useRef<Mesh>(null);
  const ringC = useRef<Mesh>(null);
  const pointer = usePointerLag(0.07);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (root.current) {
      root.current.rotation.y = t * 0.16 + pointer.current.x * 0.55;
      root.current.rotation.x = 0.22 + pointer.current.y * 0.35;
      root.current.position.x = pointer.current.x * 0.25;
      root.current.position.y = pointer.current.y * 0.12;
    }

    if (core.current) {
      core.current.position.y = Math.sin(t * 0.85) * 0.06;
      core.current.rotation.y = t * 0.2;
    }

    if (wire.current) {
      wire.current.rotation.y = -t * 0.12;
      wire.current.rotation.z = Math.sin(t * 0.3) * 0.15;
    }

    if (ringA.current) {
      ringA.current.rotation.z = t * 0.42;
      ringA.current.rotation.x = Math.PI / 2.35 + Math.sin(t * 0.35) * 0.12;
    }
    if (ringB.current) {
      ringB.current.rotation.y = t * 0.28;
      ringB.current.rotation.x = Math.PI / 3.2;
      ringB.current.rotation.z = t * -0.18;
    }
    if (ringC.current) {
      ringC.current.rotation.x = t * 0.22;
      ringC.current.rotation.y = Math.PI / 5 + Math.cos(t * 0.25) * 0.2;
    }
  });

  return (
    <group ref={root} position={[0.2, 0.05, 0]} scale={1.05}>
      <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.45}>
        <mesh ref={core} castShadow>
          <icosahedronGeometry args={[0.95, 16]} />
          <MeshDistortMaterial
            color="#1a6b5c"
            emissive="#0d3d34"
            emissiveIntensity={0.12}
            metalness={0.62}
            roughness={0.18}
            clearcoat={0.55}
            clearcoatRoughness={0.2}
            distort={0.28}
            speed={2.1}
          />
        </mesh>

        <mesh ref={wire} scale={1.14}>
          <icosahedronGeometry args={[0.95, 1]} />
          <meshBasicMaterial
            color="#7eb8a8"
            wireframe
            transparent
            opacity={0.28}
          />
        </mesh>

        <mesh ref={ringA} castShadow>
          <torusGeometry args={[1.48, 0.028, 24, 160]} />
          <meshStandardMaterial
            color="#c4a574"
            metalness={0.85}
            roughness={0.18}
          />
        </mesh>

        <mesh ref={ringB} castShadow>
          <torusGeometry args={[1.72, 0.018, 20, 160]} />
          <meshStandardMaterial
            color="#243040"
            metalness={0.55}
            roughness={0.35}
          />
        </mesh>

        <mesh ref={ringC} castShadow>
          <torusGeometry args={[1.28, 0.012, 16, 140]} />
          <meshStandardMaterial
            color="#3d9a84"
            metalness={0.7}
            roughness={0.25}
            transparent
            opacity={0.85}
          />
        </mesh>

        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusKnotGeometry args={[0.42, 0.085, 180, 16]} />
          <meshPhysicalMaterial
            color="#0f4a3e"
            metalness={0.4}
            roughness={0.15}
            transmission={0.35}
            thickness={0.6}
            transparent
            opacity={0.92}
          />
        </mesh>

        <OrbitingNodes />
      </Float>
    </group>
  );
}

function CameraRig() {
  const pointer = usePointerLag(0.05);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      pointer.current.x * 0.45,
      0.04,
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      0.15 + pointer.current.y * 0.2 + Math.sin(t * 0.5) * 0.04,
      0.04,
    );
    state.camera.lookAt(0.15, 0.05, 0);
  });

  return null;
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <hemisphereLight args={["#f3efe6", "#8aa8a0", 0.55]} />
      <directionalLight
        castShadow
        position={[4.5, 6.5, 3.5]}
        intensity={1.45}
        color="#fff4e5"
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-3.5, 1.5, -2]} intensity={0.55} color="#7eb8a8" />
      <pointLight position={[2.5, -1, 2]} intensity={0.35} color="#c4a574" />

      <Suspense fallback={null}>
        <Sculpture />
        <ParticleField />
        <Sparkles
          count={28}
          scale={[5.5, 4, 5.5]}
          size={2.2}
          speed={0.35}
          opacity={0.35}
          color="#9ec9bf"
        />
        <Environment preset="studio" environmentIntensity={0.55} />
        <ContactShadows
          position={[0, -1.65, 0]}
          opacity={0.42}
          scale={10}
          blur={3.2}
          far={5}
        />
      </Suspense>
      <CameraRig />
    </>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 touch-none">
      <Canvas
        className="h-full w-full"
        dpr={[1, 1.8]}
        camera={{ position: [0, 0.2, 4.4], fov: 36, near: 0.1, far: 40 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.08;
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
