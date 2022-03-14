import {useContext, useEffect} from "react";
import {NavigationItemType} from "../../../data/NavigationLists";
import {GameInterfaceContext} from "../../../context/GameInterfaceContext";


const NavigationListItem = (props: NavigationItemType) => {
  
  const {img} = props;
  const {buildingTool, setBuildingTool} = useContext(GameInterfaceContext)
  
  
  useEffect(() => {
    return () => setBuildingTool(null);
  },[])
  
  
  return (
    <div
      style={{
        margin: '10px',
        border: (buildingTool && props.title === buildingTool.title) ? '1px solid black' : 'none',
        cursor: 'pointer'
      }}
      onClick={() => {
        console.log(props)
        setBuildingTool(props)
      }}
    >
      <img src={img} style={{height: '100%'}}/>
    </div>
  )
  
}

export default NavigationListItem