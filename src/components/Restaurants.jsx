import { useContext } from "react"
import EcomContext from "../context/EcomContext"
import RestaurantsListing from "./RestaurantsListing"

function Restaurants() {
  const { restaurants } = useContext(EcomContext)

  return (
    <div className="grid grid-cols-3">
      {restaurants.map((item) => (
        <RestaurantsListing item={item} key={item.id} />
      ))}
    </div>

  )
}

export default Restaurants