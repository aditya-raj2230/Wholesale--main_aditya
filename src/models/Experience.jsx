import React, { useRef, useMemo, useCallback } from 'react';
import { useMatcapTexture, Center, Text3D, OrbitControls } from '@react-three/drei';
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

    // Predefined cloud positions
    const cloudData = useMemo(() => [
        {
            id: 'cloud-1',
            position: new THREE.Vector3(-10, 2, -2),  // top left
            scale: 0.55
        },
        {
            id: 'cloud-2',
            position: new THREE.Vector3(3, 1, -1),   // top right
            scale: 0.65
        },
        {
            id: 'cloud-3',
            position: new THREE.Vector3(-4, -1, -3), // bottom left
            scale: 0.60
        },
        {
            id: 'cloud-4',
            position: new THREE.Vector3(4, -2, -2),  // bottom right
            scale: 0.75
        },
        {
            id: 'cloud-5',
            position: new THREE.Vector3(0, 0.5, -2),   // top center
            scale: 0.67
        },
        {
            id: 'cloud-6',
            position: new THREE.Vector3(0, -2, -1),  // bottom center
            scale: 0.6
        },
        {
            id: 'cloud-7',
            position: new THREE.Vector3(-12, -3.5, -2),  // far bottom left
            scale: 1
        },
        {
            id: 'cloud-8',
            position: new THREE.Vector3(-12, 1, -3),  // mid left
            scale: 1.5
        },
        {
            id: 'cloud-9',
            position: new THREE.Vector3(-6, -2, -2),  // bottom left corner
            scale: 1
        },
        // {
        //     id: 'cloud-10',
        //     position: new THREE.Vector3(-2, -4, -1),  // bottom center-left
        //     scale: 0.5
        // },
        // {
        //     id: 'cloud-11',
        //     position: new THREE.Vector3(-15, -2, -2), // far left
        //     scale: 0.75
        // },
        // {
        //     id: 'cloud-12',
        //     position: new THREE.Vector3(-4, -3, -3),  // lower left
        //     scale: 0.4
        // }
    ], []);

    // Simplified Cloud component without motion
    const Cloud = useCallback(({ data }) => (
        <group 
            position={data.position}
        >
            <Scene scale={data.scale} />
        </group>
    ), []);

    // Optimize OrbitControls configuration
    const controlsConfig = useMemo(() => ({
        minPolarAngle: Math.PI / 2,
        maxPolarAngle: Math.PI / 2,
        enablePan: false,
        enableZoom: false,
        target: [0, 0, 0],
        enableDamping: false, // Disable damping for better performance
        rotateSpeed: 0.5      // Reduce rotate speed for smoother rotation
    }), []);

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
            {cloudData.map((data) => (
                <Cloud 
                    key={data.id}
                    data={data}
                />
            ))}

            <Center position={[0, 0, 0]}>
                <TextComponent />
            </Center>
        </>
    );
}
