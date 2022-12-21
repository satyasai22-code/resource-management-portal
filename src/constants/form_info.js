 import  {NAME_REGEX, URL_REGEX, MOBILE_NUMBER_REGEX, PASSWORD_REGEX} from "./regex"
 export const addItemFormInfo = {
    INPUTS: [
        {
          id: 1,
          name: "itemName",
          type: "text",
          placeholder: "Enter Item Name",
          errorMessage: "Item Name should be 3-20 characters!",
          label: "ITEM TITLE",
          pattern: NAME_REGEX,
          required: true,
        },
        {
          id: 2,
          name: "link",
          type: "text",
          placeholder: "Enter Link",
          errorMessage: "It should be a valid link!",
          label: "LINK",
          pattern:
            URL_REGEX,
          required: true,
        },
        {
          id: 3,
          name: "iconURL",
          type: "text",
          placeholder: "Enter URL",
          errorMessage: "It should be a valid URL!",
          label: "ICON URL",
          pattern:
            URL_REGEX,
          required: true,
        },
        {
          id: 4,
          name: "tagName",
          type: "text",
          placeholder: "",
          errorMessage:
            "select the tag",
          label: "TAG NAME",
          pattern: "",
          required: true,
        },
        {
          id: 5,
          name: "category",
          type: "text",
          placeholder: "Enter Category",
          errorMessage: "Category should be 3-20 characters!",
          label: "CATEGORY",
          pattern: NAME_REGEX,
          required: true,
        },
      ],
    TEXTAREA :   {
          id: 6,
          name: "description",
          type: "text",
          placeholder: "Enter Description",
          errorMessage: "Description shouldn't be Empty!",
          label: "DESCRIPTION",
      }
}

export const loginFormInfo = {
   INPUTS :[ 
    {
      id: 7,
      name: "mobileNumber",
      type: "text",
      placeholder: "Enter Mobile Number",
      errorMessage: "Invalid Mobile Number",
      label: "Mobile Number*",
      pattern: MOBILE_NUMBER_REGEX,
      required: true,
   },
    {
    id: 8,
    name: "password",
    type: "password",
    placeholder: "Enter password",
    errorMessage: "Min 8 characters required",
    label: "Password*",
    pattern: PASSWORD_REGEX,
    required: true,
 }]
}