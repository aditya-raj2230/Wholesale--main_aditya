import React, { useRef, useMemo, useCallback } from 'react';
import { useMatcapTexture, Center, Text3D, OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Scene from './Scene';

export default function Experience() {
    const [matcapTexture] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256);
    const material = useMemo(() => new THREE.MeshMatcapMaterial({ matcap: matcapTexture }), [matcapTexture]);
    
    // Memoize Text3D configuration
    const textConfig = useMemo(() => ({
        font: './fonts/helvetiker_regular.typeface.json',
        size: 1,
        height: 0.25,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.03,
        bevelOffset: 0,
        bevelSegments: 5
    }), []);

    // Memoize OrbitControls configuration
    const controlsConfig = useMemo(() => ({
        minPolarAngle: Math.PI / 2,
        maxPolarAngle: Math.PI / 2,
        enablePan: false,
        enableZoom: false,
        target: [0, 0, 0]
    }), []);

    // Memoize cloud data
    const cloudData = useMemo(() => {
        const numClouds = 5;
        const radius = 3;
        return Array.from({ length: numClouds }, (_, i) => ({
            id: `cloud-${i}`,  // Add unique ID for React keys
            position: new THREE.Vector3(
                Math.cos((i / numClouds) * Math.PI * 2) * radius,
                2 + Math.sin((i / numClouds) * Math.PI * 2) * 1.5,
                Math.sin((i / numClouds) * Math.PI * 2) * radius
            ),
            velocity: new THREE.Vector2(
                (Math.random() - 0.5) * 0.02,
                (Math.random() - 0.5) * 0.02
            ),
            bounds: {
                x: [-6, 6],
                y: [-1, 3.5],
                z: [-6, 6]
            }
        }));
    }, []);

    const cloudRefs = useRef([]);

    // Memoize update function to reduce garbage collection
    const updateCloud = useCallback((cloud, data, delta) => {
        if (!cloud) return;

        // Update position with velocity
        cloud.position.x += data.velocity.x * delta * 60;
        cloud.position.y += data.velocity.y * delta * 60;

        // Optimized boundary checks
        if (cloud.position.x <= data.bounds.x[0]) {
            cloud.position.x = data.bounds.x[0];
            data.velocity.x = Math.abs(data.velocity.x);
        } else if (cloud.position.x >= data.bounds.x[1]) {
            cloud.position.x = data.bounds.x[1];
            data.velocity.x = -Math.abs(data.velocity.x);
        }

        if (cloud.position.y <= data.bounds.y[0]) {
            cloud.position.y = data.bounds.y[0];
            data.velocity.y = Math.abs(data.velocity.y);
        } else if (cloud.position.y >= data.bounds.y[1]) {
            cloud.position.y = data.bounds.y[1];
            data.velocity.y = -Math.abs(data.velocity.y);
        }
    }, []);

    // Optimized frame update
    useFrame((state, delta) => {
        cloudRefs.current.forEach((cloud, index) => {
            updateCloud(cloud, cloudData[index], delta);
        });
    });

    // Memoize cloud component
    const Cloud = useCallback(({ data, index }) => (
        <group 
            key={data.id}
            ref={el => cloudRefs.current[index] = el}
            position={data.position}
        >
            <Scene scale={0.5 + Math.random() * 0.2} />
        </group>
    ), []);

    // Memoize Text component
    const TextComponent = useCallback(() => (
        <group rotation={[0, Math.PI * 0.15, 0]}>
            <Text3D
                material={material}
                {...textConfig}
            >
                WHOLESALE COFFEE
            </Text3D>
            <OrbitControls {...controlsConfig} />
        </group>
    ), [material, textConfig, controlsConfig]);

    return (
        <>
            {/* Render clouds */}
            {cloudData.map((data, index) => (
                <Cloud 
                    key={data.id}
                    data={data}
                    index={index}
                />
            ))}

            <Center position={[0, 0, 0]}>
                <TextComponent />
            </Center>
        </>
    );
}
