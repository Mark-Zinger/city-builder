
import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib';
import TileWrapper from "../hoc/TileWrapper";
import TileProps from "../types/TileProps";

type GLTFResult = any & GLTF & {
  nodes: {
    Water_tower_mesh: THREE.Mesh
    Water_tower_mesh_1: THREE.Mesh
  }
  materials: {
    material_18: THREE.MeshStandardMaterial
    ['material_39.003']: THREE.MeshStandardMaterial
  }
}




export default function WaterTower(props:TileProps) {
  const { nodes, materials } = useGLTF('/assets/water_tower.glb') as GLTFResult
  
  return (
    <TileWrapper position={props.position}>
        <group scale={0.0013}>
          <mesh geometry={nodes.Water_tower_mesh.geometry} material={materials.material_18} />
          <mesh geometry={nodes.Water_tower_mesh_1.geometry} material={materials['material_39.003']} />
        </group>
    </TileWrapper>
  )
}

useGLTF.preload('/water_tower.glb')
