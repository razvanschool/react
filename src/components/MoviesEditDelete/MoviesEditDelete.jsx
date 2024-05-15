import { MovieContainer } from "../Movies/Movies.style";
import MovieCard from "./MovieCardEditDelete/MovieCardEditDelete";
import { useEffect, useState } from "react";

function MoviesEditDelete() {
  const [movies, setMovies] = useState();
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [showId, setShowId] = useState(0);

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/movies/${id}`, { method: "DELETE" });
    console.log(movies, id);

    setMovies(movies.filter((movie) => movie.id != id));
    console.log(movies, id);
    setShow(false);
  };

  useEffect(() => {
    // fetch e o functie asyncrona
    fetch("http://localhost:3001/movies")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data);
        // setMovies imi face update la state si imi forteaza componenta sa se re-randeze
      })
      .catch(() => {
        setError(true);
        // la fel si setError
        // in concluzie de fiecare data cand se schimba state-ul (stare componentei)
        // tot codul e rexecutat
      });
  }, []);

  return (
    <MovieContainer loc="MovieContainer">
      {!movies && !error && <div>Loading...</div>}
      {error && <div>Error on getting data, Server is down :( </div>}
      {movies?.map((movie) => (
        <MovieCard
          key={movie.title}
          title={"test"}
          img={movie.img}
          handleDelete={handleDelete}
          show={show && showId === movie.id}
          setShow={setShow}
          id={movie.id}
          setShowId={setShowId}
          {...movie}
        />
      ))}
    </MovieContainer>
  );
}

export default MoviesEditDelete;
