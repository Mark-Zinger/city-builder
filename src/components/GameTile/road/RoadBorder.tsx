import {RoadType} from "../../../helpers/roadData";
import {Box} from "@react-three/drei";


const RoadBorder  = ( {type}: {type: RoadType} ) => {
  switch (type) {
    case "I": return (
      <>
        <Box args={[0.2,0.07,1]} position={[-0.5,0,0]}/>
        <Box args={[0.2,0.07,1]} position={[0.5,0,0]}/>
      </>
    );
    case "L": return (
      <>
        <Box args={[0.2,0.07,1]} position={[-0.5,0,0]}/>
        <Box args={[0.2,0.07,1.1]} rotation-y={Math.PI/2} position={[-0.05,0,0.5]}/>
        <Box args={[0.1,0.07,0.1]} position={[0.45,0,-0.45]}/>
      </>
    )
    case "T": return (
      <>
        <Box args={[0.2,0.07,1]} position={[0.5,0,0]}/>
        <Box args={[0.1,0.07,0.1]} position={[-0.45,0,0.45]}/>
        <Box args={[0.1,0.07,0.1]} position={[-0.45,0,-0.45]}/>
      </>
    );
    case "X": return (
      <>
        <Box args={[0.1,0.07,0.1]} position={[-0.45,0,0.45]}/>
        <Box args={[0.1,0.07,0.1]} position={[-0.45,0,-0.45]}/>
        <Box args={[0.1,0.07,0.1]} position={[0.45,0,0.45]}/>
        <Box args={[0.1,0.07,0.1]} position={[0.45,0,-0.45]}/>
      </>
    );
  }
}


export default RoadBorder