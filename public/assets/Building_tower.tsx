/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ['������������_������_1_1087_1']: THREE.Mesh
    ['������������_������_1_1087_2']: THREE.Mesh
    ['������������_������_1_1087_3']: THREE.Mesh
    ['������������_������_1_1087_4']: THREE.Mesh
    ['������������_������_1_1087_5']: THREE.Mesh
  }
  materials: {
    material: THREE.MeshStandardMaterial
    ['.1_3']: THREE.MeshStandardMaterial
    material_18: THREE.MeshStandardMaterial
    material_35: THREE.MeshStandardMaterial
    material_38: THREE.MeshStandardMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/building_tower.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0, -1.7]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.44, 1.44, 1.44]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[-450.46, 368.52, 2623.86]}>
            <group position={[450.46, -30.78, -2505.41]}>
              <mesh geometry={nodes['������������_������_1_1087_1'].geometry} material={materials.material} />
              <mesh geometry={nodes['������������_������_1_1087_2'].geometry} material={materials['.1_3']} />
              <mesh geometry={nodes['������������_������_1_1087_3'].geometry} material={materials.material_18} />
              <mesh geometry={nodes['������������_������_1_1087_4'].geometry} material={materials.material_35} />
              <mesh geometry={nodes['������������_������_1_1087_5'].geometry} material={materials.material_38} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/building_tower.glb')
