import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { LiaTimesSolid } from "react-icons/lia";
import { useContext } from "react";
import EcomContext from "../../context/EcomContext";

function Cart() {
  const { cartItems, updateQuantity, subTotal, removeItem } = useContext(EcomContext);

  const cartTable = (
    <div className="min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-semibold mb-4">Cart</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr>
                <th className="py-3 px-4 text-left">Items</th>
                <th className="py-3 px-4 text-left">Price</th>
                <th className="py-3 px-4 text-left">Quantity</th>
                <th className="py-3 px-4 text-left">Total</th>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-3 px-4 flex items-center">
                    <img src={item.image} alt="" className="w-16 rounded object-cover h-16 mr-4" />
                    <span className="hidden md:block lg:block">
                      {item.name}
                    </span>
                  </td>
                      <td className="py-3 px-4">₦{item.price}</td>

                  <td className="py-3 px-1">
                    <div className="flex items-center">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity > 1 ? item.quantity - 1 : 1)}                 
                        className="px-2 py-1"
                      >
                        <AiOutlineMinus />
                      </button>
                      <input
                        type="text"
                        value={item.quantity}
                        onChange={(e) => {
                          const value = e.target.value.replace(/[^0-9]/g, "");
                          updateQuantity(item.id, value > 0 ? value : 1);
                        }}
                        min={1}
                        className="w-[40px] h-[30px] p-2 border outline-none"
                      />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          updateQuantity(item.id, item.quantity + 1);
                        }}                  
                        className="px-2 py-1 "
                      >
                        <AiOutlinePlus />
                      </button>
                    </div>
                  </td>

                  <td className="py-3 px-4">₦{item.amount}</td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => removeItem(item.id)}
                      aria-label="Remove item from cart"
                      className="text-orange-500 text-[25px] relative group"
                    >
                      <LiaTimesSolid />
                      <span className="absolute left-0 bottom-0 block w-full h-0.5 bg-orange-600 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end mt-6">
          <div className="w-full md:w-1/3 bg-orange-300 text-gray-700 p-6 rounded-lg shadow-md">
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Subtotal</span>
              <span className="font-semibold">₦{subTotal()}</span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="font-semibold">Delivery</span>
              <span className="font-semibold">Free</span>
            </div>
            <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300">
              Check Out
            </button>
            <p className="text-center text-sm mt-4">
              we accept payments with flutterwave
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
    <div className="container mx-auto p-6">
      {cartItems.length > 0 ? cartTable : (
        <div>
          <h1 className="text-3xl font-semibold mb-4">Cart</h1>
          <p className="text-center font-semibold text-[20px]">
            You have no item in Cart
          </p>
        </div>
      )}
    </div>
  </div>
  );
}

export default Cart;
