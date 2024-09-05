import { useContext } from "react";
import EcomContext from "../../context/EcomContext";
import { useParams } from "react-router-dom";

function Details() {
    const { id } = useParams();
    const { product, addToCart } = useContext(EcomContext);
    const menuItems = product?.flatMap(item => item.menu) || [];
    const menuitem = menuItems.find(item => item.id === parseInt(id));

  return (
        <div className="max-w-screen flex bg-white rounded-xl shadow-md overflow-hidden">
            <div className="max-w-[573px] max-h-[573px] mb-3 p-6 object-cover min-h-[500px] min-w-[500px]">
                <img src={menuitem?.image} alt="" className="rounded" />
            </div>
            <div className="w-[45%] p-8">
                <h2 className="mb-10 border-b-2 text-[24px] font-extrabold text-orange-600">{menuitem?.name}</h2>
                <p className="font-light text-[17px]">{menuitem?.description}</p>
                <p className="py-3 text-[20px] font-bold">Price: ₦{menuitem?.price}</p>
                <p className="mb-10 text-[17px]">Restaurant: <span className="italic font-bold text-orange-400">Taco Bell</span></p>
                <button onClick={() => addToCart({...menuitem, quantity: 1})} className="mt-4 w-full bg-orange-600 text-white text-center py-2 px-4 rounded-lg hover:bg-orange-700 transition duration-300">Add to Cart</button>
            </div>
        </div>
  );
}

export default Details;
