"use client";

import { Text } from "@react-three/drei";
import { useEffect, useState } from "react";
import { InfoText } from "./infoText";

export const VideoText = () => {
    const fontsChakraPetch = "/fonts/ChakraPetch-Bold.ttf";
    const colorRed = "#A52A2A";

    const [video] = useState(() =>
        Object.assign(document.createElement('video'), {
            src: '/drei.mp4',
            crossOrigin: 'Anonymous',
            loop: true,
            muted: true,
        })
    );

    useEffect(() => {
        video.play();
    }, [video]);

    return (
        <>
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
        </>
    );
};
