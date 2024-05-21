import { useState } from "react";
import { AddContainer, AddButton } from "./Add.style";
import AddForm from "./AddForm";

const inputs = [
  {
    name: "title",
    type: "text",
  },
  {
    name: "image",
    type: "text",
  },
  {
    name: "year",
    type: "number",
  },
  {
    name: "rating",
    type: "number",
  },
  {
    name: "description",
    type: "text",
  },
  {
    name: "category",
    type: "text",
  },
];

const Add = () => {
  const [inputObject, setInputObject] = useState({
    title: "",
    image: "",
    year: 0,
    rating: 0,
    description: "",
    category: "",
  });

  const [error, setError] = useState({
    title: undefined,
    image: undefined,
    year: undefined,
    rating: undefined,
    description: undefined,
    category: undefined,
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

  const handlesubmit = () => {
    console.log(inputObject);
    fetch(`http://localhost:3001/movies`, {
      method: "POST",
      body: JSON.stringify(inputObject),
      headers: {
        "Content-Type": "application/json",
      },
    });
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
      <AddButton onClick={() => handlesubmit()}> Submit</AddButton>
    </AddContainer>
  );
};

export default Add;
