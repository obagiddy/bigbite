import React from "react"

function Profile() {
  return (
    <div className="container mx-auto p-6">
      <div className="p-6 shadow-md bg-orange-100 rounded space-y-5">
        <h1 className="text-[26px] font-extrabold mb-4">Profile Management</h1>

        <div className="">
          <label htmlFor="" className="block text-[17px] font-semibold mb-[6px] text-gray-700">Username</label>
          <input type="text" className="outline outline-1 outline-orange-50 rounded-sm text-[15px] p-[10px] w-full whitespace-nowrap overflow-hidden" />
        </div>

        <div>
          <label htmlFor="" className="block text-[17px] font-semibold mb-[6px] text-gray-700">First Name</label>
          <input type="text" className="outline outline-1 outline-orange-50 rounded-sm text-[15px] p-[10px] w-full whitespace-nowrap overflow-hidden" />
        </div>

        <div>
          <label htmlFor="" className="block text-[17px] mb-[6px] font-semibold text-gray-700">Last Name</label>
          <input type="text" className="outline outline-1 outline-orange-50 rounded-sm text-[15px] p-[10px] w-full whitespace-nowrap overflow-hidden" />
        </div>

        <div>
          <label htmlFor="" className="block text-[17px] mb-[6px] font-semibold text-gray-700">Email</label>
          <input type="email" className="outline outline-1 outline-orange-50 rounded-sm text-[15px] p-[10px] w-full whitespace-nowrap overflow-hidden" />
        </div>

        <div>
          <label htmlFor="" className="block text-[17px] mb-[6px] font-semibold text-gray-700">Phone Number</label>
          <input type="text" className="outline outline-1 outline-orange-50 rounded-sm text-[15px] p-[10px] w-full whitespace-nowrap overflow-hidden" />
        </div>

        <div className="p-3 bg-white rounded mb-6 shadow-md">
          <h2 className="text-[18px] font-semibold mb-4">Delivery Information</h2>
          <div>
            <textarea className="outline outline-1 resize-none p-2 text-[15px] outline-gray-300 w-full"></textarea>
          </div>

          <div className="mt-2 bg-orange-400 transition duration-300 active:bg-orange-500 lg:hover:bg-orange-500 w-fit p-3 rounded px-4 text-white">
            <button>Add Address</button>
          </div>
        </div>

        <div className="p-6 bg-white shadow-md rounded">
          <h2 className="text-[18px] font-extrabold mb-4">Order History</h2>
          <div className="border-b pb-4 mb-4">
            <h3 className="text-[17px] font-medium mb-[2px]">Order <span className="text-[15px] font-light">#1235363</span></h3>
            <p className="text-[15.5px] text-gray-600">Date: <span className="font-light text-sm">10.02.2024</span></p>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-[16px] font-medium">Item: <span className="font-light text-gray-950">Burger</span></li>
              <li className="text-[16px] font-medium">Price: <span className="font-light text-gray-950">$100</span></li>
              <li className="text-[15.5px] font-medium">Quantity: <span className="font-light text-gray-950">2</span></li>
              <li className="text-[15.5px] font-medium">Delivery Address: <span className="font-light text-gray-950">59, kareem laka ikeja</span></li>
            </ul>
            <p className="font-semibold mt-2">SubTotal: <span className="font-light text-gray-950">$200</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile