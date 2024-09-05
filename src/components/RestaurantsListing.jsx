import { Link } from "react-router-dom";

function RestaurantsListing({ item }) {
  return (
    <Link to={`/restaurant/${item.id}`}>
      <div className="m-4 bg-orange-500 border-y-2 rounded-lg w-[280px] h-[350px] border-orange-500">
        <img
          src={item?.logo}
          alt=""
          className="h-[290px] w-full object-cover rounded-lg"
        />
        <p className="font-bold text-white text-center py-[10px] text-[20px] overflow-hidden">
          {item?.restaurant}
        </p>
      </div>
    </Link>
  );
}

export default RestaurantsListing;
