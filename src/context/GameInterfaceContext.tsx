import {createContext, FC, useState} from "react";


export const GameInterfaceContext = createContext<any>(null);


const InterfaceContextProvider:FC<{value: any}> = ({children, value}) => {
  
  return (
    <GameInterfaceContext.Provider value={value}>
      {children}
    </GameInterfaceContext.Provider>
  )
}


export default InterfaceContextProvider;