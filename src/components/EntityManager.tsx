import {useAppSelector} from "../app/hooks";
import {selectEntityes} from "../features/entityes";
import GameEntityType from '../types/GameEntityType'
import GameEntity from "./GameEntity";


function EntityManager () {
  
  const {entities} = useAppSelector(selectEntityes)
  
  return (
    <>{ (Object.values(entities) as GameEntityType[])
        .map( entity => <GameEntity key={entity.id} {...entity}/>)
    }
    </>
  )
  
}



export default EntityManager;