import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { TextureLoader, Mesh, BufferGeometry, Material, Color } from "three";

export const Smoke = () => {
    const texture = useMemo(() => new TextureLoader().load("/texture/smoke.png"), []);
    const particlesRef = useRef<Mesh<BufferGeometry, Material | Material[]>[]>([]);

    useFrame((state, delta) => {
        particlesRef.current.forEach((particle) => {
            if (particle) {
                particle.rotation.z += delta * 0.2;
            }
        });
    });

    return (
        <group>
            <directionalLight intensity={1} position={[-1, 0, 1]} />
            {Array.from({ length: 150 }).map((_, index) => (
                <mesh
                    key={index}
                    ref={(el) => { if (el) particlesRef.current[index] = el }}
                    position={[
                        Math.random() * 500 - 250,
                        Math.random() * 500 - 250,
                        Math.random() * 1000 - 1000,
                    ]}
                    rotation={[0, 0, Math.random() * 2 * Math.PI]}
                >
                    <planeGeometry args={[300, 300]} />
                    <meshLambertMaterial
                        map={texture}
                        depthWrite={false}
                        color={new Color("rgb(83, 84, 255)")}
                        transparent
                    />
                </mesh>
            ))}
        </group>
    );
};
