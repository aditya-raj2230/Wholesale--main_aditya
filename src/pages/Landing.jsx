import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from '../models/Experience2'
import LoadingScreen from '../components/LoadingScreen'
import { Preload } from '@react-three/drei'

const Landing = () => {
    return (
        <>
            <LoadingScreen />
            
            <div className="w-screen h-screen bg-gray-300">
                <Canvas
                    className="w-full h-full"
                    camera={{
                        fov: 45,
                        near: 0.1,
                        far: 200,
                        position: [5, 2, 8]
                    }}
                    gl={{ clearColor: '#FFB6C1' }}
                >
                    <Suspense fallback={null}>
                        <Preload all />
                        <Experience />
                    </Suspense>
                </Canvas>
            </div>
        </>
    )
}

export default Landing
