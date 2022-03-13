import {RoadType} from "../../../helpers/roadData";
import {Line, Plane} from "@react-three/drei";


const RoadMarkups  = ( {type}: {type: RoadType} ) => {
  switch (type) {
    case "I": return (
      <>
        <RoadLine points={[[0,0,-0.5],[0,0,0.5]]}/>
      </>
    );
    case "L": return (
      <>
        <RoadLine points={[[0,0,-0.5],[0,0,0]]} dashSize={0.12}/>
        <RoadLine points={[[0.5,0, 0],[0,0,0]]} dashSize={0.12}/>
      </>
    )
    case "T": return (
      <>
        <RoadLine points={[[0,0,-0.5],[0,0,0.5]]}/>
        <Crosswalk position={[-0.5,0,0]} rotation-y={Math.PI/2}/>
      </>
    );
    case "X": return (
      <>
        <Crosswalk position={[0,0,0.5]}/>
        <Crosswalk position={[0,0,-0.5]}/>
        <Crosswalk position={[0.5,0,0]} rotation-y={Math.PI/2}/>
        <Crosswalk position={[-0.5,0,0]} rotation-y={Math.PI/2}/>
      </>
    );
  }
}

const RoadLine = (props: any) => <Line dashed={true} gapSize={0.1} dashSize={0.1} dashOffset={0.05} color={"white"} {...props}/>

const Crosswalk = (props: any) => {
  return (
    <group {...props}>
      { new Array(15)
        .fill('')
        .map((_, i) => (
          <Plane args={[0.01,0.2]} position={[ (-0.35 + 0.05*i), 0.01, 0 ]}  rotation-x={-Math.PI/2} key={i}/>
        ))
      }
    </group>
  )
}

export default RoadMarkups