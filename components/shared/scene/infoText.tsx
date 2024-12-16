"use client";

import { Text } from "@react-three/drei";
import React from "react";

interface InfoTextType {
    children: React.ReactNode,
    isSub: boolean
}

export const InfoText = ({ children, isSub }: InfoTextType) => {
    const font = "/fonts/Tektur_Condensed-Bold.ttf";
    const fontSize = 10;
    const letterSpacing = 0.02;
    const colorRed = "#A52A2A";
    const colorYellow = "#EFBF04";

    return (
        <group
            position={[0, isSub ? -fontSize * 2.5 : fontSize * 2.5, 0]}
        >
            <Text
                font={font}
                fontSize={fontSize}
                position={[0.3, 0.2, -0.01]}
                letterSpacing={letterSpacing}
                color={colorRed}
            >
                {children}
            </Text >
            <Text
                font={font}
                fontSize={fontSize}
                position={[0, 0, 0]}
                letterSpacing={0.02}
                color={colorYellow}
                // outlineWidth={0.1}
                // outlineColor="white"
            >
                {children}
            </Text >
        </group>

    )
} 