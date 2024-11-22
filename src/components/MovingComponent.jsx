import React from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import Donuts from './Donut'

const MovingComponent = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 8] }}>
        <Donuts material={
          new THREE.MeshNormalMaterial()
        } />
      </Canvas>
    </div>
  )
}

export default MovingComponent
