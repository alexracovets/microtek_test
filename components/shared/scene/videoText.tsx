"use client";

import { Text } from "@react-three/drei";
import { useEffect } from "react";

import { useContentStore } from "@/store/useContentStore";
import { InfoText } from "@/components/shared/scene";

export const VideoText = () => {
    const fontsChakraPetch = "/fonts/ChakraPetch-Bold.ttf";
    const colorRed = "#A52A2A";
    const { video } = useContentStore();

    useEffect(() => {
        video.play();
    }, [video]);

    return (
        <group>
            <InfoText isSub={false}>
                ДЕРЖАВНЕ ПІДПРИЄМСТВО
            </InfoText>
            <Text
                font={fontsChakraPetch}
                fontSize={40}
                outlineWidth={.5}
                position={[0, 0, 0]}
                letterSpacing={-0.02}
                color={colorRed}
                outlineColor={"white"}
            >
                MICROTEK
                <meshBasicMaterial toneMapped={false}>
                    <videoTexture attach="map" args={[video]} />
                </meshBasicMaterial>
            </Text>
            <InfoText isSub={true}>
                БАЗОВИЙ ЦЕНТР КРИТИЧНИХ ТЕХНОЛОГІЙ
            </InfoText>
        </group>
    );
};
