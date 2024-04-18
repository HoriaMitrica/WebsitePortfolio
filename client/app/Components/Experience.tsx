import { OrbitControls } from "@react-three/drei";

export default function Loader() {
    return (
      <>
      <OrbitControls/>
      <mesh>
        <boxGeometry/>
        <meshNormalMaterial/>
      </mesh>
      </>
    );
  }