import { useState } from "react";
import { AddContainer, AddButton } from "./Add.style";
import AddForm from "./AddForm";

const inputs = [
  {
    name: "Title",
    type: "text",
  },
  {
    name: "Image",
    type: "text",
  },
  {
    name: "Year",
    type: "number",
  },
  {
    name: "Rating",
    type: "number",
  },
  {
    name: "Description",
    type: "text",
  },
  {
    name: "Category",
    type: "text",
  },
];

const Add = () => {
  const [inputObject, setInputObject] = useState({
    Title: "",
    Image: "",
    Year: 0,
    Rating: 0,
    Description: "",
    Category: "",
  });

  const handleChange = (e, name) => {
    setInputObject({ ...inputObject, [name]: e.target.value });
  };
  console.log(inputObject);

  return (
    <AddContainer>
      {inputs.map((el, index) => (
        <AddForm
          key={index}
          name={el.name}
          type={el.type}
          value={inputObject[el.name]}
          handleChange={handleChange}
        />
      ))}

      <AddButton> Submit</AddButton>
    </AddContainer>
  );
};

export default Add;
