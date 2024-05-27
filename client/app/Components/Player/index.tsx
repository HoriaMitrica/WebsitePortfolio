import { useBox } from "@react-three/cannon";
import { FirstPersonControls, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import { FirstPersonControls as FirstPersonControlsType} from 'three-stdlib'
import { Mesh } from "three";

export const Player=()=> {
  const controlsRef=useRef<FirstPersonControlsType>(null);
  const [ref] = useBox<Mesh>(() => ({ mass: 0.5
    , position: [0, 10, 0] }));
  return (
    <>
      <PerspectiveCamera makeDefault position={[-5, 2, -5] }/>
      {/* <FirstPersonControls lookSpeed={1} ref={controlsRef}/> */}
       <mesh ref={ref}>
        <PerspectiveCamera/>
       <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
       </mesh>
    </>
  );
}