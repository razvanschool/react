import { useState, useEffect } from "react";
import { AddContainer, AddButton } from "./Edit.style";
import EditForm from "./EditForm";
import { useParams } from "react-router-dom";
import useFetchMovies from "../../hooks/useFetchMovie";

const Edit = () => {
  const { id } = useParams(); //am extras doar id din {id: 1}
  const {
    movies: movie,
    error: errorGetData,
    loading,
  } = useFetchMovies("/" + id);

  const [inputObject, setInputObject] = useState(null);

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
      body: JSON.stringify(inputObject),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  useEffect(() => {
    if (movie) setInputObject(movie);
  }, [movie]);

  // useEffect(() => {
  //   // fetch e o functie asyncrona
  //   fetch(`http://localhost:3001/movies/${id}`)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setInputObject(data);
  //       // setMovies imi face update la state si imi forteaza componenta sa se re-randeze
  //     })
  //     .catch(() => {
  //       setError(true);
  //       // la fel si setError
  //       // in concluzie de fiecare data cand se schimba state-ul (stare componentei)
  //       // tot codul e rexecutat
  //     });
  // }, [id]);

  return (
    <AddContainer>
      {inputObject &&
        //Object.keys imi faci un array de cheile obiectului ex: {"cheie": 1 } => ["cheie"]
        Object.keys(inputObject).map((el, index) => (
          <EditForm
            key={index}
            name={el}
            type={el === "year" || el === "rating" ? "number" : "text"}
            value={inputObject[el]}
            handleChange={handleChange}
            error={error[el]}
          />
        ))}
      {loading && <div>Loading...</div>}
      {/* {errorTitle && <p>{errorTitle}</p>} */}
      {!errorGetData && (
        <AddButton onClick={() => handlesubmit()}> Submit</AddButton>
      )}
      {errorGetData && <p>{errorGetData}</p>}
    </AddContainer>
  );
};

export default Edit;
