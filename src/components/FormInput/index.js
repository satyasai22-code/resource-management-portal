import { useState } from "react";
import DropDown from "../DropDown";
import FormErrorMessage from "../FormErrorMessage";
import Label from "../FormLabel";
import "./index.css";

const FormInput = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const [focused, setFocused] = useState(false);

  const onHandleFocus = (event) => {
    setFocused(true);
  };
  const tagList = [ 'Resource', 'Request', 'User']
  return (
    <div className="input-container">
      <Label className={`input-label`} label={label} />
      {
        label === "TAG NAME"?
        <DropDown className={`input-field`} label={label} tagList={tagList}/> :(    
            <input
            className={`input-field link-input-field`}
            {...inputProps}
            id={`${label}`}
            onChange={onChange}
            onBlur={onHandleFocus}
            focused={focused.toString()}
          />)
      }
      <FormErrorMessage errorMessage={errorMessage}/>
    </div>
  );
};

export default FormInput;
