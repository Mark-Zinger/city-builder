import React from "react";
import {useAppSelector} from "../../app/hooks";
import {selectGameGrid} from "../../features/game_grid";


function GridHelper () {
  
  const {size} = useAppSelector(selectGameGrid)
  
  
  return <gridHelper args={[...size, 0x000, 0x333333]}/>
}

export default GridHelper