import { useState } from "react";
import FormErrorMessage from "../FormErrorMessage";
import Label from "../FormLabel/FormLabel"
import "./index.css";

const FormTextArea = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const [focused, setFocused] = useState(false);
  const onHandleFocus = (event) => {
    setFocused(true);
  };
  return (
    <div className="input-container">
      <Label className={`input-label`} label={label}/>
        <textarea
          className="input-field"
          {...inputProps}
          id={`${label}`}
          onChange={onChange}
          onBlur={onHandleFocus}
          focused={focused.toString()}
        />
      <FormErrorMessage errorMessage={errorMessage}/>
    </div>
  );
};

export default FormTextArea;
