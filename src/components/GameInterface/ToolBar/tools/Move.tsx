import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import SvgIcon from "@mui/material/SvgIcon";


export function Move () {
    return (
        <Tooltip title="Move (WORK IN PROGRESS)" placement="right">
          <SvgIcon viewBox="0 0 488.406 488.406">
            <path d="M481.817,227.153l-64.5-64.5c-8.3-8.3-20.8-8.3-29.1,0c-8.3,8.3-8.3,20.8,0,29.1l31.2,31.2h-154.4v-151.8l29.1,29.1c8.3,8.3,20.8,8.3,29.1,0c8.3-8.3,8.3-20.8,0-29.1l-64.5-64.5c-7.9-7.9-17.3-9.7-31.2,0l-64.4,64.5c-8.3,8.3-8.3,20.8,0,29.1s20.8,8.3,29.1,0l31.2-31.2v153.9h-152.3l29.1-29.1c8.3-8.3,8.3-20.8,0-29.1s-20.8-8.3-29.1,0l-64.5,64.4c-7.9,7.9-9.7,17.3,0,31.2l64.5,64.5c8.3,8.3,20.8,8.3,29.1,0s8.3-20.8,0-29.1l-31.2-31.2h154.3v152.7l-29-29.1c-8.3-8.3-20.8-8.3-29.1,0s-8.3,20.8,0,29.1l64.5,64.5c7.9,7.9,17.3,9.7,31.2,0l64.5-64.5c8.3-8.3,8.3-20.8,0-29.1c-8.3-8.3-20.8-8.3-29.1,0l-31.2,31.2v-154.8h152.3l-29.1,29.1c-8.3,8.3-8.3,20.8,0,29.1c8.3,8.3,20.8,8.3,29.1,0l64.5-64.5C489.717,250.453,491.417,241.053,481.817,227.153z"/>
          </SvgIcon>
        </Tooltip>
    )
}

export default { name: 'move', component: <Move/> };
