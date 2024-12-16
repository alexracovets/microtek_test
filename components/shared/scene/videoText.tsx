"use client";

import { Text } from "@react-three/drei";
import { useEffect, useState } from "react";

export const VideoText = () => {
    const [video] = useState(() =>
        Object.assign(document.createElement('video'), {
            src: '/drei.mp4',
            crossOrigin: 'Anonymous',
            loop: true,
            muted: true,
        })
    );
    const fontsChakraPetch = "/fonts/ChakraPetch-Bold.ttf";
    const fontsTest = "/fonts/Tektur_Condensed-Bold.ttf";

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
                const mainSize = 4;
                const supSize = 1;
                const subSize = 1;

                const calcSize = (size: number) => {
                    return (window.innerWidth / 1440) * 10 * size;
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
            <Text
                font={fontsTest}
                fontSize={fontSize.sup}
                position={[0, fontSize.sup * 2.5, 0]}
                letterSpacing={fontSize.sup / 1000}
                color={"#B3321E"}
            >
                ДЕРЖАВНЕ ПІДПРИЄМСТВО
            </Text>

            {/* Текст для обводки */}
            <Text
                font={fontsChakraPetch}
                fontSize={fontSize.main}
                position={[0, 0, 0]}
                color="white"
                outlineWidth={fontSize.main / 100}
                outlineColor="white"
            >
                MICROTEK
            </Text>

            {/* Основний текст */}
            <Text
                font={fontsChakraPetch}
                fontSize={fontSize.main}
                position={[0, 0, 0]}
            >
                MICROTEK
                <meshBasicMaterial toneMapped={false}>
                    <videoTexture attach="map" args={[video]} />
                </meshBasicMaterial>
            </Text>

            <Text
                font={fontsTest}
                fontSize={fontSize.sub}
                position={[0, -fontSize.sub * 2.5, 0]}
                letterSpacing={fontSize.sub / 1000}
                color={"#ffc822"}
            >
                БАЗОВИЙ ЦЕНТР КРИТИЧНИХ ТЕХНОЛОГІЙ
            </Text >
        </>
    );
};
