import React from "react";

import {useControls} from "leva";

import GridHelper from "./GridHelper";
import WaterHelper from "./WaterHelper";






function GameGrid () {
  
  const { show_grid, show_water } = useControls(
    {
      show_grid: true,
      show_water: false,
    });
    
  return (
    <>
      { show_grid && <GridHelper/> }
      { show_water && <WaterHelper/>}
    </>
  )
}


export default GameGrid;