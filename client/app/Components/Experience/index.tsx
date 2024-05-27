
import { Canvas } from "@react-three/fiber";
import { Physics, useBox, usePlane } from '@react-three/cannon'
import { Mesh } from "three";
import { Player } from "../Player";
import { DEG_90 } from "@/app/Constants/constants";
import { OrbitControls } from "@react-three/drei";

export const Experience = () => {

  const Plane = () => {
    const [ref] = usePlane<Mesh>(() => ({ rotation: [-DEG_90, 0, 0] }));
    return (
      <mesh ref={ref} position={[0, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="lightblue" />
      </mesh>
    );
  }

  return (
    <>
      <div style={{ height: "100vh", width: "100vw" }}>
        <Canvas>
          <ambientLight intensity={3} />
          <OrbitControls />
          <Physics>
            <Plane />
            <Player />
          </Physics>
          <axesHelper />
        </Canvas>
      </div>
    </>
  );
}