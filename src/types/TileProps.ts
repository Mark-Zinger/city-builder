import { neighbours } from "../helpers/normalizeGridPosition";

interface TileProps {
  position: [number,number],
  neighbours: neighbours
}

export default TileProps