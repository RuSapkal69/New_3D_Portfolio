import { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Earth() {
  const earthRef = useRef();
  const gltf = useLoader(GLTFLoader, "/earth_1.glb");

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.005;
    }
  });

  useEffect(() => {
    if (gltf.scene) {
      gltf.scene.scale.setScalar(1); // Keep default, Framer Motion will scale the whole div
    }
  }, [gltf]);

  return <primitive ref={earthRef} object={gltf.scene} position={[0, 0, 0]} />;
}

function EarthModel() {
  return (
    <div className="w-52 h-52 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 100 }}
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
          <ambientLight intensity={0.5} />
          <pointLight
            position={[10, 2, 10]}
            intensity={50}
            decay={0}
            distance={0}
            color={"white"}
          />
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default EarthModel;
