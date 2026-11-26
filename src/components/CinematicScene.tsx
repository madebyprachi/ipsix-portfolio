import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function World() {
  const halo = useRef<THREE.Group>(null);
  const particles = useMemo(() => {
    const points = new Float32Array(240 * 3);
    for (let i = 0; i < 240; i += 1) {
      points[i * 3] = (Math.random() - 0.5) * 22;
      points[i * 3 + 1] = (Math.random() - 0.5) * 13;
      points[i * 3 + 2] = -2 - Math.random() * 12;
    }
    return points;
  }, []);

  useFrame((state, delta) => {
    if (halo.current) {
      halo.current.rotation.z += delta * 0.025;
      halo.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.12) * 0.08;
    }
  });

  return (
    <>
      <color attach="background" args={["#080b0c"]} />
      <fog attach="fog" args={["#080b0c", 8, 25]} />
      <ambientLight intensity={0.65} />
      <directionalLight position={[4, 7, 5]} intensity={2.1} color="#d9e5dc" />
      <pointLight position={[-5, 1, -3]} intensity={16} color="#b94b37" distance={13} />
      <mesh position={[4.4, 2.3, -8]}>
        <sphereGeometry args={[1.15, 48, 48]} />
        <meshBasicMaterial color="#d9d0b9" />
      </mesh>
      <mesh position={[4.4, 2.3, -7.94]}>
        <sphereGeometry args={[1.42, 48, 48]} />
        <meshBasicMaterial color="#d9d0b9" transparent opacity={0.08} />
      </mesh>

      <group ref={halo} position={[-2.1, -0.1, -4]}>
        <mesh rotation={[0.25, 0.2, 0.15]}>
          <torusGeometry args={[2.15, 0.035, 12, 120]} />
          <meshStandardMaterial color="#b7c2b7" metalness={0.7} roughness={0.3} emissive="#66786b" emissiveIntensity={0.28} />
        </mesh>
        <mesh rotation={[0.25, 0.2, 0.15]} scale={0.91}>
          <torusGeometry args={[2.15, 0.012, 8, 120]} />
          <meshBasicMaterial color="#b94b37" />
        </mesh>
        <mesh position={[0, -1.85, 0]}>
          <boxGeometry args={[4.7, 0.12, 1.5]} />
          <meshStandardMaterial color="#1a2421" roughness={0.9} />
        </mesh>
      </group>

      <Float speed={0.35} rotationIntensity={0.08} floatIntensity={0.12}>
        <mesh position={[-2.1, -0.1, -4]}>
          <octahedronGeometry args={[0.42, 1]} />
          <meshStandardMaterial color="#b94b37" roughness={0.45} metalness={0.35} />
        </mesh>
      </Float>

      {[-7.2, -5.8, 1.4, 3.1, 6.8].map((x, index) => (
        <mesh key={x} position={[x, -1.7 + (index % 2) * 0.35, -5.5 - (index % 3)]}>
          <boxGeometry args={[0.22 + (index % 2) * 0.18, 3.1 + (index % 3) * 0.7, 0.28]} />
          <meshStandardMaterial color={index % 2 ? "#17211e" : "#202a26"} roughness={0.92} />
        </mesh>
      ))}

      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particles, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#c8d0c6" size={0.025} transparent opacity={0.6} sizeAttenuation />
      </points>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.05, -3]}>
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial color="#0a100f" roughness={1} />
      </mesh>
    </>
  );
}

export default function CinematicScene() {
  return (
    <div className="cinematic-scene" aria-hidden="true">
      <Canvas
        dpr={[1, 1.35]}
        camera={{ position: [0, 0, 8], fov: 42 }}
        gl={{ antialias: false, alpha: false, powerPreference: "low-power" }}
      >
        <World />
      </Canvas>
    </div>
  );
}
