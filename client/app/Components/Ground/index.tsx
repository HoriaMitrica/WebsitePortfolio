import { useGLTF } from "@react-three/drei";

const Ground = () => {

    const { scene } = useGLTF("/models/Terrain_v6.glb");
    return <primitive object={scene} />;

}
export default Ground;