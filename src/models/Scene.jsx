/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 ./public/scene.gltf 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Cat(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.05, -0.095]} scale={0.935}>
        <group position={[0, -0.228, -0.087]} rotation={[0.497, 0, -Math.PI / 2]} scale={[-1.667, 1.667, 1.667]}>
          <mesh geometry={nodes.Object_7.geometry} material={materials['light_material.001']} position={[-0.753, 0, -0.558]} scale={1.012} />
        </group>
        <mesh geometry={nodes.Object_4.geometry} material={materials.cat1} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.cat1} position={[0, -0.228, -0.087]} rotation={[0.497, 0, -Math.PI / 2]} scale={[-1.667, 1.667, 1.667]} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.white} position={[0.244, 0.251, 0.054]} rotation={[0.496, -0.411, -0.184]} scale={[0.879, 1.417, 0.879]} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.white} position={[0.201, -0.318, 0.026]} rotation={[1.295, 0.861, -0.2]} scale={[0.879, 1.369, 0.879]} />
      </group>
      <group position={[0, 0.898, -0.17]} rotation={[-0.256, 0, 0]} scale={[1, 1, 1.201]}>
        <group position={[0, -0.146, 0.156]}>
          <group position={[0.235, 0.107, 0.295]} rotation={[-0.292, 0.093, 0.459]} scale={[0.158, 0.119, 0.046]}>
            <mesh geometry={nodes.Object_25.geometry} material={materials['cat1_pupils.001']} />
            <mesh geometry={nodes.Object_26.geometry} material={materials['light_material.001']} />
          </group>
          <mesh geometry={nodes.Object_19.geometry} material={materials.cat1} />
          <mesh geometry={nodes.Object_21.geometry} material={materials['light_material.001']} position={[0, -0.079, 0.357]} rotation={[0.181, 0, 0]} scale={[0.101, 0.029, 0.029]} />
          <mesh geometry={nodes.Object_23.geometry} material={materials['light_material.001']} position={[0, 0.014, 0.375]} rotation={[-0.237, 0, 0]} scale={[0.05, 0.013, 0.05]} />
        </group>
        <mesh geometry={nodes.Object_15.geometry} material={materials['white.001']} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.glass} position={[0, -0.162, 0.293]} />
        <mesh geometry={nodes.Object_28.geometry} material={materials['cat1.002']} position={[0.394, 0.152, 0.152]} rotation={[-0.174, 0.193, -0.528]} scale={0.756} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
export default Cat;