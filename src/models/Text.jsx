import { Center, Text3D, useMatcapTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useEffect } from 'react'

export default function Text() {
    const material = new THREE.MeshMatcapMaterial()
    const [matcapTexture] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256)

    useEffect(() => {
        matcapTexture.colorSpace = THREE.SRGBColorSpace
        matcapTexture.needsUpdate = true

        material.matcap = matcapTexture
        material.needsUpdate = true
    }, [matcapTexture])

    return (
        <Center position={[0, 0, 0]} rotation={[0, 0, 0]}>
            <Text3D
                material={material}
                font="./fonts/helvetiker_regular.typeface.json"
                size={0.75}
                height={0.2}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.02}
                bevelSize={0.02}
                bevelOffset={0}
                bevelSegments={5}
            >
                WHOLESALE COFFEE
            </Text3D>
        </Center>
    )
}
