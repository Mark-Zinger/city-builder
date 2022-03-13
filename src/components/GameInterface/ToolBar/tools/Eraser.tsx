import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import SvgIcon from '@mui/material/SvgIcon';


export function Eraser () {
    return (
        <Tooltip title="Rotate (WORK IN PROGRESS)" placement="right">
          <SvgIcon viewBox="0 0 509.823 509.822">
            <path d="M509.823,254.911c0,140.559-114.354,254.911-254.911,254.911C114.353,509.822,0,395.47,0,254.911h44.97c0,115.758,94.182,209.949,209.942,209.949c115.757,0,209.938-94.191,209.938-209.949c0-115.76-94.182-209.941-209.938-209.941c-50.893,0-99.505,18.291-137.719,51.558l45.908,45.903L20.507,165.208L43.283,22.633l42.057,42.05C132.097,22.972,192.071,0,254.912,0C395.469,0,509.823,114.353,509.823,254.911z M409.653,251.164L255.002,96.513L100.347,251.164l154.655,154.652L409.653,251.164z"/>
          </SvgIcon>
        </Tooltip>
    )
}


export default { name: 'rotate', component: <Eraser/> };
