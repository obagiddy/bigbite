import { useContext } from "react";
import EcomContext from "../../context/EcomContext";
import { Link, useParams } from "react-router-dom";

function RestaurantDetails() {
  const { id } = useParams();
  const { restaurants } = useContext(EcomContext);
  const restaurant = restaurants.find((rest) => rest.id.toString() === id);

  console.log("Restaurants array:", restaurants);
  console.log("ID from URL parameter:", id);
  console.log("Restaurant found:", restaurant);
  if (!restaurants) {
    return <p>Restaurants data not available</p>;
  }

  if (!restaurant) {
    return <p>Restaurant not found with ID: {id}</p>;
  }

  return (
    <div className="container mx-auto p-7">
      <div className="flex items-center">
        <img
          src={restaurant.logo}
          alt={restaurant.restaurant}
          className="w-14 h-14 mr-3 rounded object-cover"
        />
        <h2 className="text-3xl font-black border-b-2 border-orange-200 mb-2">
          {restaurant.restaurant}
        </h2>
      </div>
      <div>
        <h1 className="text-center font-extrabold mt-5 mb-3 text-[29px]">
          Menu Listing
        </h1>
      </div>
      {restaurant.menu.map((item) => (
        <Link to={`/details/${item?.id}`}>
            <div className="flex items-center hover:bg-orange-500 hover:text-white duration-300 hover:rounded px-4 py-4 border-b border-gray-200">
          <img
            src={item.image}
            alt="Fried Rice"
            className="w-20 h-20 object-cover rounded-full mr-4"
          />
          <div className="flex-1">
            <h3 className="text-lg font-medium">{item.name}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
          <span className="text-lg font-semibold">₦{item.price}</span>
        </div>
        </Link>
      ))}
      <div className="flex justify-between p-7 max-w-full items-center">
        <div className="bg-gradient-to-tl from-orange-400 p-4 max-w-sm shadow-lg rounded-lg to-orange-900 text-white">
          <h2 className="text-[27px] mt-2 font-extrabold mb-4">Operating Hours</h2>
          <ul className="space-y-2 font-medium">
            {Object.keys(restaurant.operatingHours).map((day) => (
              <li key={day}>
                {day}: {restaurant.operatingHours[day]}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[25px] font-bold mt-4">Location Map View</h2>
          <div className="w-[295px] h-[250px]">
            <iframe
              src={restaurant.location.googleMapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetails;
