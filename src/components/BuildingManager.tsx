import React, {useCallback, useContext, useEffect, useState} from "react";
import * as THREE from "three";
import {Plane} from "@react-three/drei";
import {floorVector, getGridPositionFromVec} from "../helpers/normalizeGridPosition";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {createTile, selectGameGrid} from "../features/game_grid";
import {GameInterfaceContext} from "../context/GameInterfaceContext";


const BuildingManager = () => {
  
  const [hoverVec3, setHoverVec3] = useState<THREE.Vector3>(new THREE.Vector3(0,0,0))
  const {grid, size} = useAppSelector(selectGameGrid);
  
  const {buildingTool} = useContext(GameInterfaceContext);
  const dispatch = useAppDispatch();
  
  const onClickHandler = useCallback(() => {
    const position = getGridPositionFromVec(hoverVec3, size);
    if(buildingTool) {
      if(buildingTool.type === "tile") {
        dispatch(createTile({
          position: [position.x, position.y],
          value: buildingTool.props.t_key,
          allowed: buildingTool.allowed
        }))
      }
    }
    
    
  },[buildingTool, hoverVec3, size])
  
  
  
  return (
    <>
      <Plane
        args={size}
        rotation-x={-Math.PI/2}
        onPointerMove={(e)=> {
          const fVector = floorVector(e.point);
          setHoverVec3(fVector )
        }}
        onClick={onClickHandler}
        visible={false}
      />
      {!!buildingTool && <Plane
        args={[1, 1]}
        rotation-x={-Math.PI / 2}
        position={hoverVec3}
        material-color={"red"}
      />}
    </>
  );
}

export default BuildingManager;