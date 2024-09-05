import { useContext } from "react";
import EcomContext from "../context/EcomContext";
import RestaurantsListing from "./RestaurantsListing";

function PopularRestaurants() {
  const { restaurants } = useContext(EcomContext);

  return (
    <div className="mx-[1%]">
      <h1 className="font-extrabold py-[8px] text-[25px]">Popular Restaurants</h1>
      <div className="grid grid-cols-4">
        {restaurants.map((item, index) => (
          <RestaurantsListing item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default PopularRestaurants;
