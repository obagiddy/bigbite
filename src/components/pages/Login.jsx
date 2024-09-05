
import { FaStarOfLife } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex h-screen">
      <div className="bg-[#bdbace] india h-[100vh] py-[90px] space-y-5 text-center w-full p-[30px]">
        <h1 className="text-[35px] header2 font-black">Welcome Back</h1>
        <p className="zain font-light mt-[5px] mb-[10px] animate-bounce text-[20px]">Signin into your account</p>

        <form className="space-y-4" action="">
        <div className="space-y-1">
            <label htmlFor="emailOrUsername" className="block mr-[110px] text-[17px] font-semibold">Enter email or username</label>
            <input id="emailOrUsername" type="text" placeholder="Email or username" aria-label="Email or username" required className="outline outline-1 outline-blue-50 rounded-sm text-[15px] p-[10px] w-[320px]" />
        </div>
        <div className="space-y-1">
            <label htmlFor="password" className="block text-[17px] mr-[189px] font-semibold">Enter password</label>
            <input type="password" placeholder="password" required className="outline outline-1 outline-blue-50 rounded-sm text-[15px] p-[10px] w-[320px]" />
        </div>
        <div className="flex items-center px-[200px] space-x-1">
            <input id="confirmRobot" type="checkbox" required className="accent-orange-700" />
            <label htmlFor="confirmRobot" className="text-[14px] text-gray-700">Confirm i'm not a robot</label>
        </div>
        <div>
            <h3 className="text-[15px]">Don't have an account yet? <Link to="/register" className="relative text-orange-600 font-medium group">Register<span className="absolute left-0 bottom-0 block w-full h-0.5 bg-orange-600 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span> </Link> </h3>
        </div>
        <div>
            <button className="bg-orange-400 hover:text-gray-900 duration-300 rounded-[5px] font-medium hover:bg-orange-300 w-[300px] p-[9px]">Sign in</button>
        </div>
        </form>
      </div>

      <div className="bg-[url('/img/pot.jpg')] w-screen bg-cover bg-no-repeat" ></div>
    </div>
  );
}

export default Login;
