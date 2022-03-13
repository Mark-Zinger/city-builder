import GameEntityProps from "../../types/GameEntityType";
import BuildingTower from "../../entities/BuildingTower";
import BuildingHouse1 from "../../entities/BuildingHouse1";
import BuildingHouse2 from "../../entities/BuildingHouse2";
import GasStation from "../../entities/GasStation";
import Park from "../../entities/Park";
import Store from "../../entities/Store";


function GameEntity (props: GameEntityProps) {
  const {e_key} = props;
  
  switch (e_key) {
    case 100: return <BuildingTower {...props}/>;
    case 101: return <BuildingHouse1 {...props} />;
    case 102: return <BuildingHouse2  {...props} />;
    case 105: return <GasStation {...props} />;
    case 106: return <Park {...props} />;
    case 107: return <Store {...props} />;
    default: return null
  }
}


export default GameEntity