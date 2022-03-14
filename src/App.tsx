import './App.css';

import React, {Suspense, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import {OrbitControls, useContextBridge} from '@react-three/drei';
import Terrain from "./components/Terrain";
import GameGrid from "./components/GameGrid";
import {Provider} from "react-redux";
import {store} from "./app/store";
import TileManager from "./components/TileManager";
import EntityManager from "./components/EntityManager";
import GameInterface from "./components/GameInterface";
import TileRoad from "./tiles/road";
import RoadBridge from "./tiles/RoadBridge";
import InterfaceContextProvider, {GameInterfaceContext} from "./context/GameInterfaceContext";
import BuildingManager from "./components/BuildingManager";


function App() {
  const [buildingTool, setBuildingTool] = useState(null);
  
  
  
  return (
    <div className="App">
      <InterfaceContextProvider value={{buildingTool, setBuildingTool}}>
      <GameInterface/>
      <Suspense fallback={null}>
        <Canvas>
          <InterfaceContextProvider value={{buildingTool, setBuildingTool}}>
  
          <Provider store={store}>
            <ambientLight intensity={0.3} />
            <pointLight position={[0, 100, 0]} intensity={0.5} />
            
            <EntityManager/>
            <TileManager/>
            <BuildingManager/>
            
            <GameGrid/>
            <Terrain/>
            
            <OrbitControls/>
            
          </Provider>
          </InterfaceContextProvider>
        </Canvas>
      </Suspense>
      </InterfaceContextProvider>
    </div>
  );
}

export default App;
