import { useContext } from "react";
import EcomContext from "../context/EcomContext";
import { Link } from "react-router-dom";

function ProductItems({item}) {
  const { addToCart } = useContext(EcomContext)


  return (
    <div className="m-4 bg-orange-200 border-y-2 rounded-lg h-[450px] border-orange-500">
      <Link to={`/details/${item.id}`}>
        <img src={item.image} alt="" className="h-[290px] w-full object-cover rounded-lg" /> 
      </Link>
      <div className="text-center space-y-2 my-3">
        <p className="font-bold text-[17px] overflow-hidden">{item.name}</p>
        <p className="font-medium text-[16px]">₦{item.price}</p>
        <button onClick={() => addToCart({...item, quantity: 1})} className="bg-orange-600 text-white p-[9px] rounded-[5px] hover:bg-orange-400 transition duration-300">Add to cart</button>
      </div>
    </div>
  );
}

export default ProductItems;
