

function Register() {
  return (
    <div className="flex h-screen">
      <div className="bg-[#bdbace] h-[100vh] py-[90px] space-y-2 text-center w-full p-[30px]">
        <h1 className="header1 text-[37px]">Create an account</h1>
        <p className="text-[23px] zain mt-[5px] font-light">It's quick and easy</p>
        
        <form className="space-y-5">

          <div className="grid grid-cols-2 space-y-[25px]">
            <div className="space-y-2">
                <label htmlFor="userName" className="block mt-[25px] font-serif mr-[180px] text-[18px] font-semibold">Username</label>
                <input id="userName" type="username" placeholder="username" required className="outline outline-1 outline-orange-50 rounded-sm text-[15px] p-[10px] w-[275px]" />
            </div>

            <div className="space-y-2">
                <label htmlFor="emailAddress" className="block mr-[220px] text-[18px] font-serif font-semibold">Email</label>
                <input id="emailAddress" type="email" placeholder="Email Address" required className="outline outline-1 outline-orange-50 rounded-sm text-[15px] p-[10px] w-[275px]" />
            </div>

            <div className="space-y-2">
                <label htmlFor="password" className="block mr-[185px] text-[18px] font-serif font-semibold">Password</label>
                <input type="password" placeholder="Password" required className="outline outline-1 outline-orange-50 rounded-sm text-[15px] p-[10px] w-[275px]" />
            </div>

            <div className="space-y-2">
                <label htmlFor="password" className="block mr-[103px] text-[18px] font-serif font-semibold">Confirm Password</label>
                <input type="password" placeholder="Confirm Password" required className="outline outline-1 outline-orange-50 rounded-sm text-[15px] p-[10px] w-[275px]" />
            </div>
          </div>

          <div>
            <label className="text-[12px] text-gray-700">By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy.</label>
          </div>

          <div>
            <button className="bg-orange-400 hover:text-gray-900 duration-300 rounded-[5px] font-medium hover:bg-orange-300 w-[300px] p-[9px]">Sign Up</button>
          </div>
        </form>
      </div>

      <div className="bg-[url('/img/jensen.jpg')] w-screen bg-cover bg-no-repeat"></div>
    </div>
  );
}

export default Register;
