import { useState } from "react";

function useAlert() {
    const [alertInfo, setAlert] = useState({
        show: false,
        type: null,
        message: ""
    })

    const showAndHide = (type, message) => {
        setAlert({show: true, type, message})

        setTimeout(()=>{
            setAlert((prev)=> ({...prev, show: false}))
        }, 1000)
    }

  return {alertInfo, showAndHide}
}

export default useAlert