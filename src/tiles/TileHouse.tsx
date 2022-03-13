import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import TileProps from "../types/TileProps";
import TileWrapper from "../hoc/TileWrapper";

type GLTFResult = any & GLTF & {
  nodes: {
    Building_mesh: THREE.Mesh
    Building_mesh_1: THREE.Mesh
    Building_mesh_2: THREE.Mesh
    Building_mesh_3: THREE.Mesh
    Building_mesh_4: THREE.Mesh
    Building_mesh_5: THREE.Mesh
  }
  materials: {
    ['material.014']: THREE.MeshStandardMaterial
    ['material_7.003']: THREE.MeshStandardMaterial
    ['material_9.002']: THREE.MeshStandardMaterial
    ['material.015']: THREE.MeshStandardMaterial
    material_57: THREE.MeshStandardMaterial
    ['material.016']: THREE.MeshStandardMaterial
  }
}

export default function TileHouse(props: TileProps) {
  const {position} = props
  const { nodes, materials } = useGLTF('/assets/tile_house_2.glb') as GLTFResult
  return (
    <TileWrapper position={position}>
      <group scale={0.0008}>
        <mesh geometry={nodes.Building_mesh.geometry} material={materials['material.014']} />
        <mesh geometry={nodes.Building_mesh_1.geometry} material={materials['material_7.003']} />
        <mesh geometry={nodes.Building_mesh_2.geometry} material={materials['material_9.002']} />
        <mesh geometry={nodes.Building_mesh_3.geometry} material={materials['material.015']} />
        <mesh geometry={nodes.Building_mesh_4.geometry} material={materials.material_57} />
        <mesh geometry={nodes.Building_mesh_5.geometry} material={materials['material.016']} />
      </group>
    </TileWrapper>
  )
}

useGLTF.preload('/tile_house_2.glb')
