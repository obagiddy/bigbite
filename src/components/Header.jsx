import { useState } from "react"
import { CiMenuBurger } from "react-icons/ci"
import { TiShoppingCart } from "react-icons/ti"
import { MdPerson } from "react-icons/md"
import { Link } from "react-router-dom"
import { useContext } from "react"
import EcomContext from "../context/EcomContext"

function Header() {
  const [open, setOpen] = useState(false)
  const { cartItems } = useContext(EcomContext)

  return (
    <div className="sticky bg-white top-0 z-[20] flex items-center justify-between py-[15px] px-[30px]">
        <div>
            <Link to=""><img className="h-[45px]" src="/img/bigbite.png" alt="" /></Link>
        </div>
        <nav className="hidden lg:flex space-x-2 font-semibold text-[17px]">
            <Link to="" className="text-white bg-orange-600 p-[9px] rounded-lg">Home</Link>
            <Link to="/menu" className="p-[9px] text-orange-900 hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500 transition-colors duration-300">Browse Menu</Link>
            <Link to="/restaurant" className="p-[9px] text-orange-900 hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500 transition-colors duration-300">Restaurants</Link>
            <Link to="/cart" className="p-[9px] relative  text-orange-900 hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500 transition-colors duration-300">
              <TiShoppingCart className="text-[27px]" />
              <div className="absolute bottom-[24px] left-[23px] bg-orange-400 text-center rounded-full font-bold text-[12px] h-5 w-5 text-white">{cartItems.length}</div>
            </Link>
            <Link to="/login" className="flex items-center bg-black p-[9px] rounded-full space-x-0.5">
              <div className="text-[23px] bg-orange-600 rounded-full">
                <MdPerson />
              </div>
              <p className="text-white text-[13px]">Login/Signup</p>
            </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="flex bg-none items-center justify-center w-[35px] h-[35px] lg:hidden">
          <CiMenuBurger className="text-3xl" />
        </button>
        <div onClick={() => setOpen(!open)} className={`fixed lg:hidden top-0 w-full bg-black z-[20] ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}></div>

        <div className={`fixed lg:hidden left-0 top-0 md:w-[300px] w-[200px] md:h-[450px] h-[350px] overflow-auto z-[30] rounded bg-[whitesmoke] transition-all py-[5px] duration-200 ${open ? " translate-x-0" : "translate-x-[-500px]"}`}>

          <nav className="flex flex-col pt-[20px] md:space-y-[20px] space-y-[15px] px-9 md:text-[24px] text-[15px]">
            <Link to="" className="text-white bg-orange-600 p-[9px] rounded-lg">Home</Link>
            <Link to="" className="border-b-[1px] border-orange-300">Browse Menu</Link>
            <Link to="" className="border-b-[1px] border-orange-300">Restaurants</Link>
            <Link to="" className="relative border-b-[1px] border-orange-300">
              <TiShoppingCart className="text-[23px] md:text-[40px]" />
              <div className="absolute bottom-[13px] md:left-[23px] md:bottom-[23px] left-[12.4px] bg-orange-400 text-center rounded-full font-bold md:text-[15px] text-[10px] md:h-[22px] md:w-[22px] h-4 w-4 text-white">{cartItems.length}</div>
            </Link>
            <Link to="" className="border-b-[1px] border-orange-300">Login</Link>
            <Link to="" className="">Create an account</Link>
          </nav>
        </div>
    </div>
  )
}

export default Header