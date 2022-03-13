
import * as THREE from 'three'
import React, { useRef } from 'react'
import {Plane, useGLTF} from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import TileProps from "../types/TileProps";
import TileWrapper from "../hoc/TileWrapper";
import getRoadBridgeData from "../helpers/getRoadBridgeData";
import RoadBorder from "./road/RoadBorder";
import RoadMarkups from "./road/RoadMarkups";

type GLTFResult = any & GLTF & {
  nodes: {
    Ground_1: THREE.Mesh
    Ground_2: THREE.Mesh
    Water_1: THREE.Mesh
    Water_2: THREE.Mesh
  }
  materials: {
    ['material.010']: THREE.MeshStandardMaterial
    ['material_59.002']: THREE.MeshStandardMaterial
    ['material.011']: THREE.MeshStandardMaterial
    ['material_59.003']: THREE.MeshStandardMaterial
  }
}

export default function RoadBridge(props: TileProps) {
  const {position, neighbours} = props
  const { nodes, materials } = useGLTF('/assets/road_bridge.glb') as GLTFResult
  
  const { type, rotate } = getRoadBridgeData(neighbours)
  
  
  
  return (
    <TileWrapper position={position}>
      
      <group rotation-y={rotate} scale={0.05}>
        { type === 'G'
         ?<group position={[-1.2, 0, -0.06]} rotation={[-Math.PI, 0, 0]} scale={[0.0135, 0.02, 0.02]}>
            <mesh geometry={nodes.Ground_1.geometry} material={materials['material.010']} />
            <mesh geometry={nodes.Ground_2.geometry} material={materials['material_59.002']} />
          </group>
         :<group position={[0.16, 17.5, 0.5]} rotation={[-Math.PI, 0, 0]} scale={[0.0085, 0.02, 0.02]}>
            <mesh geometry={nodes.Water_1.geometry} material={materials['material.011']} />
            <mesh geometry={nodes.Water_2.geometry} material={materials['material_59.003']} />
         </group>
        }
      </group>
      <group rotation-y={Math.PI/2}>
        <RoadBorder type={"I"}/>
        <Plane
          args={[1,1]}
          rotation-x={-Math.PI/2}
          material-color={"gray"}
        />
        <RoadMarkups type={"I"}/>
      </group>

    </TileWrapper>
  )
}

useGLTF.preload('/road_bridge_1.glb')
