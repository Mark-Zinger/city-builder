import './App.css';



import * as THREE from 'three'
import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Plane } from '@react-three/drei';
import Terrain from "./components/Terrain";
import GameGrid from "./components/GameGrid";
import {Provider} from "react-redux";
import {store} from "./app/store";
import TileRoad from "./components/GameTile/road";
import TileManager from "./components/TileManager";


function App() {
  
  
  return (
    <div className="App">
      <Suspense fallback={null}>
      <Canvas>
        <Provider store={store}>
          <ambientLight intensity={0.3} />
          <pointLight position={[0, 100, 0]} intensity={0.5} />
  
  
  
          <TileManager/>
          <GameGrid/>
          <OrbitControls/>
          
            <Terrain/>
          
        </Provider>
      </Canvas>
      </Suspense>
    </div>
  );
}

export default App;
