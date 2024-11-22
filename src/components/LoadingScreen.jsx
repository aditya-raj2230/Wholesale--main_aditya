import { useProgress } from '@react-three/drei'
import { useEffect, useState } from 'react'

const LoadingScreen = () => {
    const { progress } = useProgress()
    const [show, setShow] = useState(true)
    
    useEffect(() => {
        if (progress === 100) {
            // Add a small delay for smoother transition
            const timeout = setTimeout(() => {
                setShow(false)
            }, 500)
            return () => clearTimeout(timeout)
        }
    }, [progress])
    
    if (!show) return null
    
    return (
        <div className={`loading-screen w-screen h-screen bg-pink-100 fixed top-0 left-0 flex items-center justify-center z-50 transition-opacity duration-500 ${progress === 100 ? 'opacity-0' : 'opacity-100'}`}>
            <div className="text-center">
                <h1 className="text-4xl mb-4">Loading...</h1>
                <div className="text-2xl">{Math.round(progress)}%</div>
            </div>
        </div>
    )
}

export default LoadingScreen