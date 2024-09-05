import { AiFillInstagram, AiFillTikTok } from "react-icons/ai"
import { FaFacebook } from "react-icons/fa6"
import { SiSnapchat } from "react-icons/si"
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom"



function Footer() {
  return (
    <div className="flex lg:flex-row flex-col bg-[whitesmoke] justify-between max-h-fit lg:p-[60px] p-[50px]">
        <div>
            <Link to=""><img className="lg:h-[60px] h-[55px] mb-[20px]" src="/img/bigbite.png" alt="" /></Link>
            <p className="font-semibold lg:text-[16px] text-center text-sm">Company Registered with anchor</p>
        </div>
        <div className="lg:mt-0 mt-3">
            <p className="lg:mb-[20px] text-center mb-[9px] lg:text-[18px] text-[14.5px] font-black">Get Exclusive Deals in your Inbox</p>
            <input type="text" className="lg:p-[9px] p-[7px] outline-none text-[13.5px] rounded-full lg:w-[300px] w-full relative" placeholder="youremail@gmail.com" />
            <button className="font-bold bg-orange-600 text-white lg:right-[360px] right-[8px] text-[15px] lg:text-[19px] p-[5px] px-[10px] rounded-full absolute">subscribe</button>
            <p className="mt-[4px] text-center px-[10px] text-[13px] font-semibold">we won't spam read our <Link className="underline underline-offset-4">email policy</Link></p>
            <ul className="lg:mt-[14px] mt-[17px] text-center lg:mb-0 mb-[13px] space-x-3 text-[30px] lg:text-[35px] px-[18px] flex">
                <Link to="" ><FaFacebook className="text-blue-500" /></Link>
                <Link to="" ><FaInstagramSquare className="text-purple-500" /></Link>
                <Link to="" ><AiFillTikTok className="text-blue-400" /></Link>
                <Link to="" ><SiSnapchat  className="text-yellow-400" /></Link>
            </ul>
        </div>
        <div className="text-center">
            <h3 className="lg:font-black lg:text-[18px] font-semibold text-[16.8px] mb-[10px] lg:mb-[20px]">Legal Pages</h3>
            <ul className="space-y-[10px] flex flex-col font-semibold underline-offset-2 underline">
                <Link to="">Terms and Conditions</Link>
                <Link to="">Privacy Policy</Link>
                <Link to="">Cookies</Link>
            </ul>
        </div>
    </div>
  )
}

export default Footer