import { Canvas } from "@react-three/fiber";
import { NoToneMapping } from "three";
import { Suspense } from "react";
import { ProductModel } from "./productModel";
import { OrbitControls } from "@react-three/drei";

export const ProductScene = () => {
    const devicePixelRatio = typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 2) : 1;

    return (
        <div
            className="w-[50rem] h-[50rem] bg-[#3534348a] rounded-[2rem] border-[.4rem] border-regal_yellow"
        >
            <Canvas
                dpr={devicePixelRatio}
                gl={{ antialias: true, preserveDrawingBuffer: true, toneMapping: NoToneMapping }}
                camera={{ position: [0, 3, 0], fov: 60 }}
                onCreated={({ gl }) => { gl.toneMapping = NoToneMapping }}
                flat

                className="w-full h-full"
            >
                <ambientLight intensity={0.5} />
                <spotLight position={[0, 10, 0]} intensity={0.3} />
                <directionalLight position={[-50, 0, -40]} intensity={0.7} />
                <Suspense fallback={null}>
                    <ProductModel />
                </Suspense>
                <OrbitControls
                    enablePan={false}
                    maxZoom={2}
                    maxDistance={6}
                    minDistance={2}
                />
            </Canvas>
        </div>
    )
}