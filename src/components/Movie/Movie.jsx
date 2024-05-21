import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchMovies from "../../hooks/useFetchMovie";
import useLocalStorage from "../../hooks/useLocalStorage";
import {
  CardImgContainer,
  CardInfoContainer,
  Text,
  Title,
  UperText,
} from "../Movies/MovieCard/MovieCard.style";
import { MovieContainer, MovieImgSingle } from "./Movie.style";

function Movie() {
  const { id } = useParams(); //am extras doar id din {id: 1}
  const { movies: movie, error, loading } = useFetchMovies("/" + id);
  const { isLocalDataEmpty, localData, handleLocalData } =
    useLocalStorage("movies");

  const addNewId = () => {
    const local = !isLocalDataEmpty ? JSON.parse(localData) : [];
    const newLocalData = [...local, id];
    handleLocalData("movies", JSON.stringify(newLocalData));
  };

  useEffect(() => {
    console.log(isLocalDataEmpty);
    if (localData || isLocalDataEmpty) addNewId();
  }, [localData, isLocalDataEmpty]);

  // const [movie, setMovie] = useState();
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch(`http://localhost:3001/movies/${id}`)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setLoading(false);
  //       setMovie(data);
  //       // setMovies imi face update la state si imi forteaza componenta sa se re-randeze
  //     })
  //     .catch(() => {
  //       setLoading(false);
  //       setError(true);
  //       // la fel si setError
  //       // in concluzie de fiecare data cand se schimba state-ul (stare componentei)
  //       // tot codul e rexecutat
  //     });
  // }, [id]);

  return (
    <MovieContainer>
      {loading && !error && <div>Loading...</div>}
      {error && <div>Error on getting data, Server is down :( </div>}
      {movie && (
        <>
          <CardImgContainer>
            <MovieImgSingle src={movie.img} />
          </CardImgContainer>
          <CardInfoContainer>
            <Title>
              <UperText></UperText> {movie.title}
            </Title>
            <Text>
              <UperText>Year: </UperText> {movie.year}
            </Text>
            <Text>
              <UperText>Rating: </UperText> {movie.rating}
            </Text>
            <Text>
              <UperText>Description: </UperText>
              {movie.description}
            </Text>
            <Text>
              <UperText>Category: </UperText>
              {movie.category}
            </Text>
          </CardInfoContainer>
        </>
      )}
    </MovieContainer>
  );
}

export default Movie;
