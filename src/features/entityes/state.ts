import GameEntity from "../../types/GameEntityType";
import default_entities from "../../data/default_entities";


export interface GameEntitiesState {
  ids: string[],
  entities: Record<string, GameEntity>
}





