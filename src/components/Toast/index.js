import { toast } from "react-toastify"
// import { toast } from "react-toastify";
export const customToast = (props) => {
    const { message, type, ...inputProps} = props
    const style = {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",       
    }
    switch(type){
        case "error":
            return toast.error(message, style);
        case "success":
            return toast.success(message, style)
    }
}