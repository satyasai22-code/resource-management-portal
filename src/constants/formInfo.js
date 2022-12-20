 import  {NAME_REGEX, URL_REGEX} from "./regex"
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
          label: "ICON",
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