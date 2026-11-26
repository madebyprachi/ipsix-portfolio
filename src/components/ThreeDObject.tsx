
import { Canvas } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  OrbitControls,
} from "@react-three/drei";

function InteractiveSphere() {
  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={1.5}
    >
      <mesh>
        <icosahedronGeometry args={[1.35, 32]} />

        <MeshDistortMaterial
          color="#a5a5a5"
          roughness={0.15}
          metalness={0.9}
          distort={0.35}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function ThreeDObject() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[3, 3, 4]}
        intensity={3}
      />

      <InteractiveSphere />

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

export default ThreeDObject;
