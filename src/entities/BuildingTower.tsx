import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import GameEntityType from "../types/GameEntityType";
import {useAppSelector} from "../app/hooks";
import {selectGameGrid} from "../features/game_grid";
import getEntityPosition from "../helpers/getEntityPosition";
import EntityWrapper from "../hoc/EntityWrapper";

type GLTFResult = any & GLTF & {
  nodes: {
    Building_tower_mesh: THREE.Mesh
    Building_tower_mesh_1: THREE.Mesh
    Building_tower_mesh_2: THREE.Mesh
    Building_tower_mesh_3: THREE.Mesh
    Building_tower_mesh_4: THREE.Mesh
  }
  materials: {
    ['material_38.001']: THREE.MeshStandardMaterial
    ['material_18.002']: THREE.MeshStandardMaterial
    ['material_35.001']: THREE.MeshStandardMaterial
    ['material.002']: THREE.MeshStandardMaterial
    ['material.001']: THREE.MeshStandardMaterial
  }
}

export default function BuildingTower(props: GameEntityType) {
  const { nodes, materials } = useGLTF('/assets/building_tower.glb') as GLTFResult;
  
  return (
    <EntityWrapper {...props}>
      <group scale={0.0012} rotation-y={Math.PI}>
        <mesh geometry={nodes.Building_tower_mesh.geometry} material={materials['material_38.001']} />
        <mesh geometry={nodes.Building_tower_mesh_1.geometry} material={materials['material_18.002']} />
        <mesh geometry={nodes.Building_tower_mesh_2.geometry} material={materials['material_35.001']} />
        <mesh geometry={nodes.Building_tower_mesh_3.geometry} material={materials['material.002']} />
        <mesh geometry={nodes.Building_tower_mesh_4.geometry} material={materials['material.001']} />
      </group>
    </EntityWrapper>
  )
}

useGLTF.preload('/assets/building_tower.glb')
