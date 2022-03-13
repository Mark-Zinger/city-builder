/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import GameEntityType from "../types/GameEntityType";
import EntityWrapper from "../hoc/EntityWrapper";

type GLTFResult = any & GLTF & {
  nodes: {
    Building_Mesh: THREE.Mesh
    Building_Mesh_1: THREE.Mesh
    Building_Mesh_2: THREE.Mesh
    Building_Mesh_3: THREE.Mesh
    Building_Mesh_4: THREE.Mesh
    Building_Mesh_5: THREE.Mesh
    Building_Mesh_6: THREE.Mesh
  }
  materials: {
    ['material_52.002']: THREE.MeshStandardMaterial
    ['material_4.002']: THREE.MeshStandardMaterial
    ['material_35.002']: THREE.MeshStandardMaterial
    ['material_43.002']: THREE.MeshStandardMaterial
    ['.1_2.002']: THREE.MeshStandardMaterial
    ['.2_1.002']: THREE.MeshStandardMaterial
    ['1_1__13.002']: THREE.MeshStandardMaterial
  }
}

export default function BuildingHouse2(props: GameEntityType) {
  const { nodes, materials } = useGLTF('/assets/building_house_2.glb') as GLTFResult
  return (
    <EntityWrapper {...props}>
      <group rotation={[Math.PI, Math.PI, Math.PI]} scale={[0.001, 0.0009, 0.0009]} position={[0.3,0,-0.25]}>
        <mesh geometry={nodes.Building_Mesh.geometry} material={materials['material_52.002']} />
        <mesh geometry={nodes.Building_Mesh_1.geometry} material={materials['material_4.002']} />
        <mesh geometry={nodes.Building_Mesh_2.geometry} material={materials['material_35.002']} />
        <mesh geometry={nodes.Building_Mesh_3.geometry} material={materials['material_43.002']} />
        <mesh geometry={nodes.Building_Mesh_4.geometry} material={materials['.1_2.002']} />
        <mesh geometry={nodes.Building_Mesh_5.geometry} material={materials['.2_1.002']} />
        <mesh geometry={nodes.Building_Mesh_6.geometry} material={materials['1_1__13.002']} />
      </group>
    </EntityWrapper>
  )
}

useGLTF.preload('/assets/building_house_2.glb')