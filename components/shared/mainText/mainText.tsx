"use client";

import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useEffect } from "react";

import { useContentStore } from "@/store/useContentStore";

const MainText = () => {
    const fontsChakraPetch = "/fonts/ChakraPetch-Bold.ttf";
    const colorRed = "#A52A2A";

    const { video } = useContentStore();

    useEffect(() => {
        video.play();
    }, [video]);

    return (
        <Canvas>
            <Text
                font={fontsChakraPetch}
                fontSize={10}
                outlineWidth={.2}
                position={[0, 0, 0]}
                letterSpacing={-0.01}
                color={colorRed}
                outlineColor={"white"}
            >
                MICROTEK
                <meshBasicMaterial toneMapped={false}>
                    <videoTexture attach="map" args={[video]} />
                </meshBasicMaterial>
            </Text>
        </Canvas>
    )
}

export default MainText;