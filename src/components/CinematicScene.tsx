import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function World() {
  const world = useRef<THREE.Group>(null);
  const halo = useRef<THREE.Group>(null);
  const moon = useRef<THREE.Group>(null);
  const orbiting = useRef<THREE.Group>(null);
  const columns = useRef<THREE.Group>(null);
  const { camera, pointer } = useThree();

  const dust = useMemo(() => {
    const points = new Float32Array(420 * 3);
    for (let i = 0; i < 420; i += 1) {
      points[i * 3] = (Math.random() - 0.5) * 24;
      points[i * 3 + 1] = (Math.random() - 0.5) * 14;
      points[i * 3 + 2] = -2 - Math.random() * 14;
    }
    return points;
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const scroll = typeof window !== "undefined" ? window.scrollY : 0;
    const scrollProgress = THREE.MathUtils.clamp(scroll / Math.max(window.innerHeight, 1), 0, 1);

    if (world.current) {
      world.current.rotation.y = THREE.MathUtils.damp(world.current.rotation.y, pointer.x * 0.16, 3, delta);
      world.current.rotation.x = THREE.MathUtils.damp(world.current.rotation.x, -pointer.y * 0.09, 3, delta);
      world.current.position.y = THREE.MathUtils.damp(world.current.position.y, -scrollProgress * 1.35, 3, delta);
      world.current.position.x = THREE.MathUtils.damp(world.current.position.x, pointer.x * 0.28, 3, delta);
    }
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.position.x = THREE.MathUtils.damp(camera.position.x, pointer.x * 0.48, 2.5, delta);
      camera.position.y = THREE.MathUtils.damp(camera.position.y, pointer.y * 0.28 - scrollProgress * 0.42, 2.5, delta);
      camera.lookAt(0, 0, -1.5);
    }
    if (halo.current) {
      halo.current.rotation.z = t * 0.19;
      halo.current.rotation.x = 0.25 + Math.sin(t * 0.42) * 0.16;
      halo.current.rotation.y = Math.sin(t * 0.3) * 0.22;
      halo.current.position.y = -0.1 + Math.sin(t * 0.65) * 0.16;
      halo.current.scale.setScalar(1 + Math.sin(t * 0.8) * 0.035);
    }
    if (moon.current) {
      moon.current.rotation.y = t * 0.12;
      moon.current.position.y = 2.3 + Math.sin(t * 0.35) * 0.2 - scrollProgress * 0.45;
    }
    if (orbiting.current) {
      orbiting.current.rotation.y = t * 0.38;
      orbiting.current.rotation.z = -t * 0.2;
    }
    if (columns.current) {
      columns.current.children.forEach((column, index) => {
        column.position.y = -1.7 + (index % 2) * 0.35 + Math.sin(t * 0.65 + index) * 0.12;
        column.rotation.z = Math.sin(t * 0.22 + index) * 0.025;
      });
    }
  });

  return (
    <>
      <color attach="background" args={["#080b0c"]} />
      <fog attach="fog" args={["#080b0c", 8, 25]} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 7, 5]} intensity={2.2} color="#d9e5dc" />
      <pointLight position={[-5, 1, -3]} intensity={18} color="#b94b37" distance={14} />
      <pointLight position={[4, 3, -5]} intensity={8} color="#9caf9e" distance={12} />

      <group ref={world}>
        <group ref={moon} position={[4.4, 2.3, -8]}>
          <mesh>
            <sphereGeometry args={[1.15, 48, 48]} />
            <meshStandardMaterial color="#d9d0b9" emissive="#8f8978" emissiveIntensity={0.25} roughness={0.8} />
          </mesh>
          <mesh scale={1.23}>
            <sphereGeometry args={[1.15, 48, 48]} />
            <meshBasicMaterial color="#d9d0b9" transparent opacity={0.075} />
          </mesh>
        </group>

        <group ref={halo} position={[-2.1, -0.1, -4]}>
          <mesh rotation={[0.25, 0.2, 0.15]}>
            <torusGeometry args={[2.15, 0.045, 16, 140]} />
            <meshStandardMaterial color="#c2d0c2" metalness={0.72} roughness={0.25} emissive="#718878" emissiveIntensity={0.42} />
          </mesh>
          <mesh rotation={[0.25, 0.2, 0.15]} scale={0.91}>
            <torusGeometry args={[2.15, 0.018, 12, 140]} />
            <meshBasicMaterial color="#c65b43" />
          </mesh>
          <mesh rotation={[0.25, 0.2, 0.15]} scale={1.08}>
            <torusGeometry args={[2.15, 0.009, 8, 140]} />
            <meshBasicMaterial color="#8da594" transparent opacity={0.55} />
          </mesh>
          <mesh position={[0, -1.85, 0]}>
            <boxGeometry args={[4.7, 0.12, 1.5]} />
            <meshStandardMaterial color="#1a2421" roughness={0.9} />
          </mesh>
        </group>

        <group ref={orbiting} position={[-2.1, -0.1, -4]}>
          <Float speed={1.4} rotationIntensity={0.45} floatIntensity={0.55}>
            <mesh position={[2.65, 0.45, 0.4]}>
              <octahedronGeometry args={[0.34, 1]} />
              <meshStandardMaterial color="#c65b43" roughness={0.35} metalness={0.5} emissive="#8f2f22" emissiveIntensity={0.35} />
            </mesh>
          </Float>
          <Float speed={1.1} rotationIntensity={0.35} floatIntensity={0.4}>
            <mesh position={[-2.8, 0.8, -0.5]}>
              <icosahedronGeometry args={[0.22, 1]} />
              <meshStandardMaterial color="#b7c5b8" metalness={0.65} roughness={0.25} />
            </mesh>
          </Float>
          <mesh position={[0, 2.75, 0]}>
            <octahedronGeometry args={[0.13, 0]} />
            <meshBasicMaterial color="#d6cbb5" />
          </mesh>
        </group>

        <group ref={columns}>
          {[-7.2, -5.8, 1.4, 3.1, 6.8].map((x, index) => (
            <mesh key={x} position={[x, -1.7 + (index % 2) * 0.35, -5.5 - (index % 3)]}>
              <boxGeometry args={[0.22 + (index % 2) * 0.18, 3.1 + (index % 3) * 0.7, 0.28]} />
              <meshStandardMaterial color={index % 2 ? "#17211e" : "#202a26"} roughness={0.92} />
            </mesh>
          ))}
        </group>
      </group>

      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[dust, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#c8d0c6" size={0.035} transparent opacity={0.7} sizeAttenuation />
      </points>
      <Sparkles count={65} scale={[15, 8, 10]} size={1.6} speed={0.28} opacity={0.55} color="#b9c8ba" />
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
