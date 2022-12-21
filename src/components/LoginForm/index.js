import React, { useEffect, useState}  from 'react'
import FormInput from '../FormInput';
import { ToastContainer, } from "react-toastify";
import "./index.css";
import { loginFormInfo } from '../../constants/form_info';
import { customToast} from "../../utils/Toast";
import  {MOBILE_NUMBER_REGEX, PASSWORD_REGEX} from "../../constants/regex"
import { useNavigate } from "react-router-dom";
import logo from '../../images/website_logo.png'

const inputs = loginFormInfo.INPUTS

const LoginForm = () => {
    const navigate = useNavigate()
    const [ inputValues, setInputValues] = useState({
        mobileNumber: "",
        password:""
    });

    const [isDisabled, setIsDisabled] = useState(true)

    useEffect(() => {
        const { mobileNumber, password } = inputValues
        const mobileNumberRegex = new RegExp(MOBILE_NUMBER_REGEX);
        const passwordRegex = new RegExp(PASSWORD_REGEX);
        setIsDisabled(!(mobileNumberRegex.test(mobileNumber) && passwordRegex.test(password)))
      }, [inputValues]);
    
    const onSubmitForm = (event) => {
        event.preventDefault();
        const { mobileNumber, password } = inputValues;
        if (
          mobileNumber === "" ||
          password === ""
        ) {
          customToast({type:`error`, message:`Enter Valid Form Data `})
        } else {
          navigate("/")
        }
    }
    const onChange = (event) => {
        setInputValues({  ...inputValues, [event.target.name]: event.target.value });
        };

  return (
    <div className="login-form-container">
        <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
        />
    <div className="form-container-div">
      <img
        className="login-website-logo"
        src={logo}
        alt="login website logo"
      /> 
       <h1 className="heading">Login</h1>
      <form className="login-form" onSubmit={onSubmitForm}>
        {inputs.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={inputValues[input.name]}
                    onChange={onChange}
                  />
                ))}
        <button type="submit" className="login-button" disabled={isDisabled}>
          Login
        </button>
      </form>
    </div>
  </div>
);
}

export default LoginForm