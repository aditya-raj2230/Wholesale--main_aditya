import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, useMatcapTexture } from '@react-three/drei'

const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32)

export default function Donuts({ material }) {
    const donuts = useRef([])
    const [matcapTexture] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256)

    useFrame((state, delta) => {
        for(const donut of donuts.current) {
            donut.rotation.y += delta * 0.2
        }
    })

    return (
        <>
            <OrbitControls 
                enableZoom={false}
                enablePan={false}
                enableRotate={true}
                rotateSpeed={0.4}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />
            {[...Array(200)].map((value, index) => {
                const radius = 12 * Math.cbrt(Math.random())
                const theta = Math.random() * Math.PI * 2
                const phi = Math.acos(2 * Math.random() - 1)

                const x = radius * Math.sin(phi) * Math.cos(theta)
                const y = radius * Math.sin(phi) * Math.sin(theta)
                const z = radius * Math.cos(phi)

                return (
                    <mesh
                        ref={(element) => donuts.current[index] = element}
                        key={index}
                        geometry={torusGeometry}
                        material={material}
                        position={[x, y, z]}
                        scale={0.15 + Math.random() * 0.3}
                        rotation={[
                            Math.random() * Math.PI,
                            Math.random() * Math.PI,
                            0
                        ]}
                    >
                        <meshMatcapMaterial matcap={matcapTexture} />
                    </mesh>
                )
            })}
        </>
    )
} 