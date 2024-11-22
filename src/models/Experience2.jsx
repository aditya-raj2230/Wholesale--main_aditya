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

        <Text matcapTexture={matcapTexture} />
        <Cat/>
        {/* <Donuts material={material} /> */}
    </>
}