import { useMatcapTexture } from '@react-three/drei'
// import { Perf } from 'r3f-perf'
import { useEffect } from 'react'
import * as THREE from 'three'
import Text from './Text'
import Donuts from '../components/Donut'
import Cat from './Scene'

const material = new THREE.MeshMatcapMaterial()

export default function Experience() {
    const [matcapTexture] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256)

    useEffect(() => {
        matcapTexture.colorSpace = THREE.SRGBColorSpace
        matcapTexture.needsUpdate = true

        material.matcap = matcapTexture
        material.needsUpdate = true
    }, [])

    return <>
        {/* <Perf position="top-left" /> */}

        {/* Add ambient light for general illumination */}
        <ambientLight intensity={0.5} />

        {/* Add a directional light to simulate sunlight */}
        <directionalLight 
            position={[10, 10, 5]} 
            intensity={1} 
            castShadow 
        />

        {/* Add a point light for localized lighting effect */}
        <pointLight 
            position={[-10, -10, -10]} 
            intensity={0.5} 
        />

        <Text matcapTexture={matcapTexture} />
        <Cat 
            position={[4, -2, 0]}  // Adjust the position values as needed
            rotation={[0, -Math.PI / 2.5, 0]}  // Adjust the rotation values as needed
        />
        {/* <Donuts material={material} /> */}
    </>
}