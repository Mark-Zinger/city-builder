

export interface NavigationItemType {
  title: string,
  img: string,
  type: "entity" | "tile",
  allowed: number,
  props: {
    e_key: number, // entity key
    size: [number, number],
    position: [number, number],
    rotation: number
  } | { t_key: number /* tile key */ }
}
type NavigationListType = NavigationItemType[][]


const NavigationList: NavigationListType = [
  [
    {
      title: "Road",
      img: "/img/road_tile.jpg",
      type: "tile",
      props: {
        t_key: 2
      },
      allowed: 0
    },
    {
      title: "Bridge",
      img: "/img/bridge_tile.jpg",
      type: "tile",
      props: {
        t_key: 3
      },
      allowed: 1
    }
  ]
]

export default NavigationList;