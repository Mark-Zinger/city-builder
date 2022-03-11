import './App.css';



import * as THREE from 'three'
import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Plane } from '@react-three/drei';
import Terrain from "./components/Terrain";
import { useControls } from 'leva';
import GameGrid from "./components/GameGrid";

function Box(props: JSX.IntrinsicElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}








function App() {
  
  
  return (
    <div className="App">
      <Canvas>
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 100, 0]} intensity={0.5} />
        
        
        
        <GameGrid/>
        <OrbitControls/>
        <Suspense fallback={null}>
          <Terrain/>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
