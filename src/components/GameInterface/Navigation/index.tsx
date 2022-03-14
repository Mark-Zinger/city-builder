import React, {useEffect, useState} from 'react';

import useStyles from './styles';
import BottomNavigation from '@mui/material/BottomNavigation/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction/BottomNavigationAction';


import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import BoltIcon from '@mui/icons-material/Bolt';
import RoadIcon from "../../../icons/RoadIcon";
import HousesIcon from "../../../icons/HousesIcon";
import EcologyIcon from "../../../icons/EcologyIcon";
import NavigationList from "./NavigationList";


export default function Navigation() {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(null);
  
  useEffect(()=>console.log(activeTab))
  
  return (
    <div style={classes.root}>
      <NavigationList activeTab={activeTab}/>
      
      <BottomNavigation
        showLabels
        value={activeTab}
        sx={classes.group}
        onChange={(event, newValue) => {
          setActiveTab(newValue === activeTab ? null : newValue);
        }}
      >
        <BottomNavigationAction label="Roads" icon={<RoadIcon/>} color="secondary">
        </BottomNavigationAction>
        <BottomNavigationAction label="Houses" icon={<HousesIcon/>}/>
        <BottomNavigationAction label="Commercial" icon={<EuroSymbolIcon/>}/>
        <BottomNavigationAction label="Energy" icon={<BoltIcon/>}/>
        <BottomNavigationAction label="Water" icon={<LocalDrinkIcon/>}/>
        <BottomNavigationAction label="Ecology" icon={<EcologyIcon/>}/>
      </BottomNavigation>
    
    </div>
  );
}
