import { useProgress } from '@react-three/drei'
import { useEffect } from 'react'

export default function LoadingScreen({ onStarted }) {
    const { progress, loaded, total } = useProgress()
    
    useEffect(() => {
        if (loaded === total && progress === 100) {
            onStarted()
        }
    }, [progress, loaded, total, onStarted])

    return (
        <div className="loading-screen">
            <div className="loading-content">
                <h2>Loading Experience</h2>
                <div className="progress-bar">
                    <div 
                        className="progress-fill"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <p>{progress.toFixed(0)}%</p>
            </div>
        </div>
    )
}