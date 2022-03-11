import React, {useState} from "react";
import * as THREE from 'three'
import {useControls} from "leva";
import {Plane} from "@react-three/drei";
import {log} from "util";

const gameGridSize: [number,number] = [40,40]


function GameGrid () {
  
  const { grid } = useControls({ grid: true })
  const [hoverVec3, setHoverVec3] = useState<THREE.Vector3>(new THREE.Vector3(0,0,0))
  
  return (
    <>
      { grid &&<gridHelper args={[...gameGridSize, 0x000, 0x333333]}/> }
      <Plane
        args={gameGridSize}
        rotation-x={-Math.PI/2}
        onPointerMove={(e)=> {
          const {x,y,z} = e.point;
          const newVec = new THREE.Vector3( Math.floor(x)+0.5,y,Math.floor(z)+0.5, );
          // console.log({
          //   x: newVec
          // })
  
          setHoverVec3( newVec )
        }}
        visible={false}
      />
      <Plane
        args={[1,1]}
        rotation-x={-Math.PI/2}
        position={hoverVec3}
        material-color={"red"}
      />

    </>
  )
}


export default GameGrid;