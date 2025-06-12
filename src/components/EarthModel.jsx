import { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Earth({ scale = 1 }) {
  const earthRef = useRef();
  const gltf = useLoader(GLTFLoader, "/earth_1.glb");

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.005;
    }
  });

  useEffect(() => {
    if (gltf.scene) {
      console.log("GLTF Scene:", gltf.scene); // Logs the 3D model data

      gltf.scene.scale.setScalar(scale);
    }
  }, [gltf, scale]);

  return (
    <primitive ref={earthRef} object={gltf.scene} position={[0, 0, 0]} />
  );
}

function EarthModel({ scale = 1 }) {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45, near: 0.1, far: 1000 }}
        style={{ background: "transparent" }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense
          fallback={
            <mesh>
              <sphereGeometry args={[1, 16, 16]} />
              <meshBasicMaterial color="#4a90e2" wireframe />
            </mesh>
          }
        >
    {/* Soft ambient light to prevent complete darkness */}
    <ambientLight intensity={0.5} />

    {/* Point light simulating the Sun */}
    <pointLight
      position={[10, 2, 10]} // from the right front side //10 for the right side, 2 for a bit above, 15 for the front side
      intensity={50}
      distance={0} // 0 means no distance cutoff
      decay={0} // natural falloff
      color={"white"}
    />

    {/* Optional: a small sphere to visualize the point light (sun) */}
    {/* 
    <mesh position={[5, 0, 3]}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshBasicMaterial color="yellow" />
    </mesh> 
    */}
          <Earth scale={scale} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default EarthModel;
