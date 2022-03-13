import './App.css';

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import Terrain from "./components/Terrain";
import GameGrid from "./components/GameGrid";
import {Provider} from "react-redux";
import {store} from "./app/store";
import TileManager from "./components/TileManager";
import EntityManager from "./components/EntityManager";
import GameInterface from "./components/GameInterface";


function App() {
  
  
  return (
    <div className="App">
      <GameInterface/>
      <Suspense fallback={null}>
        <Canvas>
          <Provider store={store}>
            <ambientLight intensity={0.3} />
            <pointLight position={[0, 100, 0]} intensity={0.5} />
            
            
            <EntityManager/>
            <TileManager/>
            <GameGrid/>
            <Terrain/>
            
            <OrbitControls/>
            
          </Provider>
        </Canvas>
      </Suspense>
    </div>
  );
}

export default App;
