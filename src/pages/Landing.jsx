import React, { Suspense, useState, useCallback } from 'react'
import { Canvas } from '@react-three/fiber';
import Experience from '../models/Experience';
import LoadingScreen from '../components/LoadingScreen';
import { Preload } from '@react-three/drei';

const Landing = () => {
    const [started, setStarted] = useState(false)
    
    const handleStarted = useCallback(() => {
        setStarted(true)
    }, [])

    return (
        <>
            {!started && <LoadingScreen onStarted={handleStarted} />}
            
            <section className={`w-screen h-screen bg-pink-100 transition-opacity duration-1000 ${started ? 'opacity-100' : 'opacity-0'}`}>
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
                        <Experience />
                        <Preload all />
                    </Suspense>
                </Canvas>
            </section>
        </>
    )
}

export default Landing;
