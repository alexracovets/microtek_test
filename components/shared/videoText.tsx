"use client";

import { Text } from "@react-three/drei";
import { useEffect, useState } from "react";

export const VideoText = () => {
    const [video] = useState(() => Object.assign(
        document.createElement('video'),
        {
            src: '/drei.mp4',
            crossOrigin: 'Anonymous',
            loop: true,
            muted: true
        }))

    useEffect(() => {
        video.play()
    }, [video])
    
    return (
        <Text font="/Inter-Bold.woff" fontSize={20} letterSpacing={-0.06} position={[0, 1.3, -2]} >
            Microtek
            <meshBasicMaterial toneMapped={false}>
                <videoTexture attach="map" args={[video]}/>
            </meshBasicMaterial>
        </Text>
    )
}