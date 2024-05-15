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

  const [error, setError] = useState({
    Title: undefined,
    Image: undefined,
    Year: undefined,
    Rating: undefined,
    Description: undefined,
    Category: undefined,
  });

  const handleChange = (e, name) => {
    setInputObject({ ...inputObject, [name]: e.target.value });
    handleError(e.target.value, name);
  };

  const handleError = (value, name) => {
    switch (name) {
      case "Title":
        if (value.length < 3) {
          setError({
            ...error,
            [name]: "Titlu trebuie sa fie mai lung de 3 caracter",
          });
        } else if (value === "Title") {
          setError({ ...error, [name]: "titlu nepotrivit" });
          // ...error copie oniectul vechi de erori
          // [name] se refera la ["Title"]
          // ce am facut e sa copi obiectul vechi si sa ii schimb numai title cu valoarea noua
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      default:
        break;
    }
  };

  // const [title, setTitle] = useState("");
  // const [errorTitle, setErrorTitle] = useState(undefined);

  // const handleChangeTitle = (e) => {
  //   const title = e.target.value;
  //   if (title.lenght < 3) {
  //     setErrorTitle("Titlu trebuie sa fie mai lung de 3 caracter");
  //   } else if (title === "Title") {
  //     setErrorTitle("Titlu nepotrivit");
  //   } else {
  //     setTitle(title);
  //     setErrorTitle(undefined);
  //   }
  // };

  return (
    <AddContainer>
      {inputs.map((el, index) => (
        <AddForm
          key={index}
          name={el.name}
          type={el.type}
          value={inputObject[el.name]}
          handleChange={handleChange}
          error={error[el.name]}
        />
      ))}
      {/* {errorTitle && <p>{errorTitle}</p>} */}
      <AddButton> Submit</AddButton>
    </AddContainer>
  );
};

export default Add;
