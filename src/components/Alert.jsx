import { useContext } from "react"
import EcomContext from "../context/EcomContext"

function Alert() {
  const { alertInfo } = useContext(EcomContext) 

  return (
    <div>
      {alertInfo.show && <div className={`${alertInfo.type === "success" ? "bg-green-500" : "bg-red-500"} fixed top-[70px] z-30 w-[25%] m-auto left-0 right-0 rounded text-center text-white text-[17px] font-medium p-[9px]`}>{alertInfo.message}</div>}
    </div>
  )
}

export default Alert