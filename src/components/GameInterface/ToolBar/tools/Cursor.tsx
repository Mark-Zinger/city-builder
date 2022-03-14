import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import BrushIcon from '@mui/icons-material/Brush';
import SvgIcon from "@mui/material/SvgIcon";


export function Cursor () {
    return (
        <Tooltip title="Cursor" placement="right">
          <SvgIcon viewBox="0 0 32 32">
            <path d="M27.34,12.06l-22-8A1,1,0,0,0,4.06,5.34l8,22A1,1,0,0,0,13,28h0a1,1,0,0,0,.93-.63l3.84-9.6,9.6-3.84a1,1,0,0,0,0-1.87Zm-10.71,4h0l-.4.16-.16.4h0L13,24.2,6.67,6.67,24.2,13Z"/>
          </SvgIcon>
        </Tooltip>
    )
}


export default { name: 'cursor', disable:false, component: <Cursor/>};