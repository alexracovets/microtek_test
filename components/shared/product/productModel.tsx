import { useGLTF } from "@react-three/drei"

export const ProductModel = () => {


    const { scene } = useGLTF("/models/reb.glb");
    return <primitive object={scene} />
}