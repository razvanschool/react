import { MovieContainer } from "./Movies.style";
import MovieCard from "./MovieCard/MovieCard";
import { useEffect, useState } from "react";

function Movies() {
  const [movies, setMovies] = useState();
  const [error, setError] = useState(false);
  console.log(
    "aces log apare de fiecare data cand se face update la componenta ( state sau props)"
  );

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
          {...movie}
        />
      ))}
    </MovieContainer>
  );
}

export default Movies;
