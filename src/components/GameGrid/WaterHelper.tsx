import React from "react";
import {Text, Box} from "@react-three/drei";
import {useAppSelector} from "../../app/hooks";
import {selectGameGrid} from "../../features/game_grid";
import {normalizeGridPosition} from "../../helpers/normalizeGridPosition";



function WaterHelper () {
  
  const {grid, size} = useAppSelector(selectGameGrid)


  return (
    <>{grid.map((row, x) => (
        row.map((col, y) => (
          col == 1 ?
            <Text
             position={normalizeGridPosition([x,y],size)}
             color="blue"
             fontSize={0.5}
             rotation-x={-Math.PI/2}
             key={ x.toString()+':'+y.toString() }
            >W</Text>
          : null
        ))
    ))}
    </>
  );
}

export default WaterHelper;