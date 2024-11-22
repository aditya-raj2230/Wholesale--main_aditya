import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import Experience from '../models/Experience2'
import Cat from '../models/Scene'
import LoadingScreen from '../components/LoadingScreen'
import Donuts from '../components/Donut'
import MovingComponent from '../components/MovingComponent'
import StaticComponent from '../components/StaticComponent'

const Landing = () => {
    return (
        <>
            <LoadingScreen />
            <div className="w-screen h-screen bg-gray-300 relative">
                <div className="absolute inset-0">
                    <StaticComponent/>
                </div>
                <div className="absolute inset-0">
                    <MovingComponent/>
                </div>
            </div>
        </>
    )
}

export default Landing
