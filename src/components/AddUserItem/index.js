import { Link } from "react-router-dom";
import React, { Component , useState} from "react";
import Header from "../Header";
import { FaAngleLeft } from "react-icons/fa";
import addItem from "../../images/add_item.png"
import { ToastContainer, } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";
import FormInput from "../FormInput";
import FormTextArea from "../FormTextArea";
import { addItemFormInfo } from "../../constants/formInfo";

import { customToast} from "../Toast";

const inputs = addItemFormInfo.INPUTS
const textArea = addItemFormInfo.TEXTAREA

const AddResourceItem = () => {
  
  const [inputValues, setInputValues] = useState({
    itemName: "",
    link: "",
    iconURL:"",
    tagName:"Resource",
    category: "",
    description: "",
  });

  const onSubmitForm = async (event) => {
    event.preventDefault();
    const { itemName, link, iconURL, category, description } = inputValues;
    if (
      itemName === "" ||
      link === "" ||
      iconURL === "" ||
      category === "" ||
      description === ""
    ) {
      customToast({type:`error`, message:`Enter Valid Form Data `})
    } else {
      const addResourceApiURL =
        " https://media-content.ccbp.in/website/react-assignment/add_resource.json";
      const options = {
        method: "GET",
      };

      const response = await fetch(addResourceApiURL, options);
      if (response.ok) {
        customToast({type:`success`, message:`Item Added Successfully`})
      } else {
        customToast({type:`error`, message:`Item Add failed `})
      }
    }
  };

  const onChange = (event) => {
    setInputValues({  ...inputValues, [event.target.name]: event.target.value });
  };

    return (
      <>
        <Header isButtonRequired={false} />
        <div className="add-user-container">
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
          <div className="item-details-container">
            <div className="resources-button-container">
              <Link
                to="/"
                className="back-to_users-link"
              >
                <button className="back-arrow-btn" type="button">
                  <FaAngleLeft className="arrow-icon" />
                  Users
                </button>
              </Link>
            </div>
            <div className="form-details-container">
              <form className="form-container" onSubmit={onSubmitForm}>
                <h1 className="form-heading">Item Details</h1>
                {inputs.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={inputValues[input.name]}
                    onChange={onChange}
                  />
                ))}
                <FormTextArea                     
                    key={textArea.id}
                    {...textArea}
                    value={inputValues[textArea.name]}
                    onChange={onChange}/>
                <button className="submit-button" type="submit">
                  CREATE
                </button>
              </form>
            </div>
          </div>
          <div className="image-container">
            <img
              className="add-user-image"
              src={addItem}
              alt="add resource"
            />
          </div>
        </div>
      </>
    );
}

export default AddResourceItem;