import React, {useState} from "react";
import * as THREE from 'three'
import {useControls} from "leva";
import {Plane} from "@react-three/drei";
import GridHelper from "./GridHelper";
import WaterHelper from "./WaterHelper";
import {floorVector, getGridPositionFromVec} from "../../helpers/normalizeGridPosition";
import {useAppSelector} from "../../app/hooks";
import {selectGameGrid} from "../../features/game_grid";


const gameGridSize: [number,number] = [40,40]


function GameGrid () {
  
  const { show_grid, show_water } = useControls(
    {
      show_grid: true,
      show_water: false,
    });
  
  const {size} = useAppSelector(selectGameGrid);
  
  const [hoverVec3, setHoverVec3] = useState<THREE.Vector3>(new THREE.Vector3(0,0,0))
  
  return (
    <>
      { show_grid && <GridHelper/> }
      { show_water && <WaterHelper/>}
      <Plane
        args={gameGridSize}
        rotation-x={-Math.PI/2}
        onPointerMove={(e)=> {
          const fVector = floorVector(e.point);
          console.log(getGridPositionFromVec(fVector, size));
          setHoverVec3( fVector )
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