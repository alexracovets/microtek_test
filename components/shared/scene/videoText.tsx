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
    const [fontSize, setFontSize] = useState(0.1);

    useEffect(() => {
        video.play();
    }, [video]);

    useEffect(() => {
        const updateFontSize = () => {
            const calculatedFontSize = (window.innerWidth / 1440) * 10 * 6;
            setFontSize(calculatedFontSize);
        };

        updateFontSize();

        window.addEventListener("resize", updateFontSize);
        return () => window.removeEventListener("resize", updateFontSize);
    }, []);

    return (
        <>
            <Text
                font={fontsChakraPetch}
                fontSize={fontSize / 3}
                position={[0, fontSize / 1.5, 0]}
            >
                ДЕРЖАВНЕ ПІДПРИЄМСТВО
            </Text>

            {/* Текст для обводки */}
            <Text
                font={fontsChakraPetch}
                fontSize={fontSize}
                position={[0, 0, 0]}
                color="white"
                outlineWidth={0.4}
                outlineColor="white"
            >
                MICROTEK
            </Text>

            {/* Основний текст */}
            <Text
                font={fontsChakraPetch}
                fontSize={fontSize}
                position={[0, 0, 0]}
            >
                MICROTEK
                <meshBasicMaterial toneMapped={false}>
                    <videoTexture attach="map" args={[video]} />
                </meshBasicMaterial>
            </Text>
        </>
    );
};
