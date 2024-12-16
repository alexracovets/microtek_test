"use client";

import { VideoText } from "@/components/shared/scene/videoText";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export const Scene = () => {

    const devicePixelRatio = typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 2) : 1;

    return (
        <Canvas
            dpr={devicePixelRatio}
            gl={{ alpha: true }}
            camera={{ position: [0, 3, 100], fov: 60 }}
            className="flex-grow max-w-full max-h-full"
        >
            <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <spotLight position={[0, 10, 0]} intensity={0.3} />
                <directionalLight position={[-50, 0, -40]} intensity={0.7} />
                <group position={[0, -1, 0]}>
                    <VideoText />
                </group>
            </Suspense>
        </Canvas>
    );
};
