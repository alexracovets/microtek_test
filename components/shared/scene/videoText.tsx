"use client";

import { Text } from "@react-three/drei";
import { useEffect, useState } from "react";
import { InfoText } from "./infoText";

export const VideoText = () => {

    const colorRed = "#A52A2A";
    const colorYellow = "#efbf04";

    const [video] = useState(() =>
        Object.assign(document.createElement('video'), {
            src: '/drei.mp4',
            crossOrigin: 'Anonymous',
            loop: true,
            muted: true,
        })
    );
    const fontsChakraPetch = "/fonts/ChakraPetch-Bold.ttf";

    const [fontSize, setFontSize] = useState({
        main: 0,
        sup: 0,
        sub: 0,
    });

    useEffect(() => {
        video.play();
    }, [video]);

    useEffect(() => {
        const updateFontSize = () => {
            if (typeof window !== "undefined") {
                const mainSize = 40;
                const supSize = 10;
                const subSize = 10;

                const calcSize = (size: number) => {
                    return size;
                };

                setFontSize({
                    main: calcSize(mainSize),
                    sup: calcSize(supSize),
                    sub: calcSize(subSize),
                });
            }
        };

        updateFontSize();

        if (typeof window !== "undefined") {
            window.addEventListener("resize", updateFontSize);
        }

        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("resize", updateFontSize);
            }
        };
    }, []);

    return (
        <>
            <InfoText isSub={false}>
                ДЕРЖАВНЕ ПІДПРИЄМСТВО
            </InfoText>
            <Text
                font={fontsChakraPetch}
                fontSize={fontSize.main}
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
