import { Canvas } from '@react-three/fiber'
import Experience from '../models/Experience2'


export default function StaticComponent() {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <Canvas
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [0, 0, 8]
                }}
            >
                <Experience />
            </Canvas>
        </div>
    )
}
