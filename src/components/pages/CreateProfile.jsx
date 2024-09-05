

function CreateProfile() {
  return (
    <div className="flex h-screen">
      <div className="bg-[#bdbace] h-[100vh] py-[90px] space-y-2 text-center w-full p-[30px]">
        <h1 className="create font-bold mb-[30px] text-[25px]">Let's create a profile for you</h1>

        <form className="space-y-10" action="">
          <div className="flex space-x-5">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block font-serif mr-[170px] text-[18px] font-semibold">First Name</label>
              <input id="firstName" type="text" className="outline outline-1 outline-orange-50 rounded-sm text-[15px] p-[10px] w-[275px]" placeholder="Mike" required />
            </div>

            <div className="space-y-2">
              <label htmlFor="lastName" className="block font-serif mr-[180px] text-[18px] font-semibold">Last Name</label>
              <input id="lastName" type="text" className="outline outline-1 outline-orange-50 rounded-sm text-[15px] p-[10px] w-[275px]" placeholder="Ope" required />
            </div>
          </div>

          <div className="flex space-x-5">
            <div className="space-y-2">
              <label htmlFor="phoneNumber" className="block font-serif mr-[135px] text-[18px] font-semibold">Phone Number</label>
              <input id="phoneNumber" placeholder="234 123456789" type="tel" className="outline outline-1 outline-orange-50 rounded-sm text-[15px] p-[10px] w-[275px]" required />
            </div>

            <div className="space-y-2">
              <label htmlFor="address" className="block font-serif mr-[140px] text-[18px] font-semibold">Home Address</label>
              <textarea name="" id="address" placeholder="No1, no address" className="outline outline-1 outline-orange-50 rounded-sm text-[15px] p-[10px] w-[275px] resize-none"></textarea>
            </div>
          </div>

          <div>
            <button className="bg-orange-400 hover:text-gray-900 duration-300 rounded-[5px] font-medium hover:bg-orange-300 w-[300px] p-[9px]">Continue</button>
          </div>
        </form>
      </div>

      <div className="bg-[url('/img/valina.jpg')] hidden lg:block md:block w-screen bg-cover bg-no-repeat"></div>
    </div>
  );
}

export default CreateProfile;
