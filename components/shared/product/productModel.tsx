import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useContentStore } from "@/store/useContentStore";

export const ProductModel = () => {
    const { setModel } = useContentStore();
    const { scene } = useGLTF("/models/reb.glb");

    useEffect(() => {
        setModel(scene);
    }, [scene, setModel]);

    return <primitive object={scene} />;
};
