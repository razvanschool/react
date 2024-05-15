import { useState, useEffect } from "react";
import { AddContainer, AddButton } from "./Edit.style";
import EditForm from "./EditForm";
import { useParams } from "react-router-dom";

const inputs = [
  {
    name: "title",
    type: "text",
  },
  {
    name: "img",
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

const Edit = () => {
  const { id } = useParams(); //am extras doar id din {id: 1}

  const [inputObject, setInputObject] = useState({});

  const [error, setError] = useState({
    title: undefined,
    img: undefined,
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
    fetch(`http://localhost:3001/movies/${id}`, {
      method: "PUT",
      body: inputObject,
    });
  };

  useEffect(() => {
    // fetch e o functie asyncrona
    fetch(`http://localhost:3001/movies/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setInputObject(data);
        // setMovies imi face update la state si imi forteaza componenta sa se re-randeze
      })
      .catch(() => {
        setError(true);
        // la fel si setError
        // in concluzie de fiecare data cand se schimba state-ul (stare componentei)
        // tot codul e rexecutat
      });
  }, [id]);

  return (
    <AddContainer>
      {inputs ? (
        inputs?.map((el, index) => (
          <EditForm
            key={index}
            name={el.name}
            type={el.type}
            value={inputObject[el.name]}
            handleChange={handleChange}
            error={error[el.name]}
          />
        ))
      ) : (
        <h1>Loading...</h1>
      )}
      {/* {errorTitle && <p>{errorTitle}</p>} */}
      <AddButton onClick={() => handlesubmit()}> Submit</AddButton>
    </AddContainer>
  );
};

export default Edit;
