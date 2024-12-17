import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { NoToneMapping } from "three";
import { Suspense } from "react";

import { ProductModel } from "./productModel";

const ProductScene = () => {
    const devicePixelRatio = typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 2) : 1;

    return (
        <div
            className="bg-[#3534348a] rounded-[2rem] border-[.4rem] border-regal_yellow flex-grow"
        >
            <Canvas
                dpr={devicePixelRatio}
                gl={{ antialias: true, preserveDrawingBuffer: true, toneMapping: NoToneMapping }}
                camera={{ position: [0, 1, 2], fov: 60 }}
                onCreated={({ camera }) => {
                    camera.lookAt(0, 0, 0);
                }}
            >
                <ambientLight intensity={0.5} />
                <spotLight position={[0, 10, 0]} intensity={0.3} />
                <directionalLight position={[-50, 0, -40]} intensity={0.7} />
                <Suspense fallback={null}>
                    <mesh position={[0, -1, 0]}>
                        <ProductModel />
                    </mesh>
                </Suspense>
                <OrbitControls
                    enablePan={false}
                    maxDistance={5}
                    minDistance={1.5}
                    target={[0, -1, 0]}
                />
            </Canvas>
        </div>
    )
}

export default ProductScene;