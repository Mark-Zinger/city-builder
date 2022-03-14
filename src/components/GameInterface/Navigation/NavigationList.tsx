import {Paper} from "@mui/material";
import navigationLists from "../../../data/NavigationLists";
import NavigationListItem from "./NavigationListItem";

interface NavigationListProps {
  activeTab: null | number;
}


const NavigationList = (props: NavigationListProps) => {
  const { activeTab } = props;
  
  
  return (
    <Paper sx={{
      mb: 1,
      overflow: 'hidden',
      width: activeTab !== null ? '100%' : '0%',
      transition: 'width .3s ease',
      height: 120,
      display: "flex",
      justifyContent: "center",
    }}
    >
      { activeTab !== null && navigationLists[activeTab]
          ? navigationLists[activeTab].map((item,i) => <NavigationListItem key={i} {...item}/>)
          : <h2>Work in progress</h2>
      }
      
    </Paper>
  )
}

export default NavigationList;