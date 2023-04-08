import { useGLTF } from "@react-three/drei";
import SofaGLTF from '../3dmodels/scene1.gltf'

const Sofa = () => {
    const gltf = useGLTF(SofaGLTF)
    return (
        <>
            <primitive  position={[0, 0, 0]} object={gltf.scene} scale={1} />
        </>
    );
};

export default Sofa;