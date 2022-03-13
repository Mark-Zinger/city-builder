
import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Water_Mesh: THREE.Mesh
    Water_Mesh_1: THREE.Mesh
  }
  materials: {
    material_39: THREE.MeshStandardMaterial
    material_18: THREE.MeshStandardMaterial
  }
}

export default function WaterTowerTile({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  //@ts-ignore
  const { nodes, materials } = useGLTF('/assets/water_tower.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={0.001}>
        <mesh geometry={nodes.Water_Mesh.geometry} material={materials.material_39} />
        <mesh geometry={nodes.Water_Mesh_1.geometry} material={materials.material_18} />
      </group>
    </group>
  )
}

useGLTF.preload('/water_tower.glb')
