import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

import Tools from './tools';
import useStyles from './styles';




export default function ToolBar () {
  const classes = useStyles();
  const [value, setValue] = useState("cursor");



  return (
    <div style={classes.root}>
      <ToggleButtonGroup
        sx={classes.group}
        orientation="vertical"
        value={value}
        exclusive
        color="primary"

      >
        { 
          Tools.main.map(({name, component, disable}) =>
          (<ToggleButton key={name} value={name} onClick={()=>setValue(name)} disabled={disable}>{component}</ToggleButton>))
        }
      </ToggleButtonGroup>
      {/*<ToggleButtonGroup*/}
      {/*  className={classes.group}*/}
      {/*  orientation="vertical"*/}
      {/*  color="secondary"*/}
      {/*>*/}
      {/*  { */}
      {/*    Tools.color.map(({name, component}) => */}
      {/*    (<ToggleButton key={name} value={name} component="label">{component}</ToggleButton>))*/}
      {/*  }*/}
      {/*  </ToggleButtonGroup>*/}
    </div>
  );
}
