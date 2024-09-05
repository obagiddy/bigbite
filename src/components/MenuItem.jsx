import { Link } from "react-router-dom";

  const MenuItem = ({ item }) => {
    return (
      <Link to={`/details/${item?.id}`}>
        <div className="flex items-center p-4 hover:bg-orange-400 hover:text-white hover:rounded duration-300 border-gray-200">
        <img src={item?.image} alt="" className="w-20 h-20 rounded-full object-cover mr-4" />
        <div className="flex-1">
          <h3 className="text-xl font-medium">{item?.name}</h3>
          <p className="text-gray-600">{item?.description}</p>
        </div>
        <span className="text-lg font-semibold">₦{item?.price}</span>
      </div>
      </Link>
    );
  };
  
  export default MenuItem;