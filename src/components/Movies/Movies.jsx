import { MovieContainer } from "./Movies.style";
import MovieCard from "./MovieCard/MovieCard";
// import { useEffect, useState } from "react";
import useFetchMovies from "../../hooks/useFetchMovie";
import { MoviesContext } from "./../../store/movies/context";
import { useContext } from "react";
import { moviesPlus, moviesMinus } from "./../../store/movies/actions";
function Movies() {
  // const [movies, setMovies] = useState();
  // const [error, setError] = useState(false);
  // console.log(
  //   "aces log apare de fiecare data cand se face update la componenta ( state sau props)"
  // );

  // useEffect(() => {
  //   // fetch e o functie asyncrona
  //   fetch("http://localhost:3001/movies")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setMovies(data);
  //       // setMovies imi face update la state si imi forteaza componenta sa se re-randeze
  //     })
  //     .catch(() => {
  //       setError(true);
  //       // la fel si setError
  //       // in concluzie de fiecare data cand se schimba state-ul (stare componentei)
  //       // tot codul e rexecutat
  //     });
  // }, []);
  const { movies, error, loading } = useFetchMovies();
  const { stateGlobalMovies, dispatchMovies } = useContext(MoviesContext);
  const handleAddFav = (id, title) => {
    dispatchMovies(moviesPlus({ id, title }));
  };
  const handleDeleteFromFav = (id) => {
    dispatchMovies(moviesMinus(id));
  };
  console.log(stateGlobalMovies);
  return (
    <MovieContainer loc="MovieContainer">
      {loading && <div>Loading...</div>}
      {error && <div>{error}! Error on getting data, Server is down :( </div>}
      {movies?.map((movie) => (
        <div key={movie.title}>
          <div onClick={() => handleDeleteFromFav(movie.id)}>-</div>
          {movie.title}{" "}
          <div onClick={() => handleAddFav(movie.id, movie.title)}>+</div>
        </div>
      ))}
      {movies &&
        movies?.map((movie) => (
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
