import { useEffect, useState } from "react";
import { MovieContainer, MovieImgSingle } from "./Movie.style";
import {
  CardImgContainer,
  CardInfoContainer,
  Title,
  UperText,
  Text,
} from "../Movies/MovieCard/MovieCard.style";
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams(); //am extras doar id din {id: 1}
  const [movie, setMovie] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/movies/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setMovie(data);
        // setMovies imi face update la state si imi forteaza componenta sa se re-randeze
      })
      .catch(() => {
        setLoading(false);
        setError(true);
        // la fel si setError
        // in concluzie de fiecare data cand se schimba state-ul (stare componentei)
        // tot codul e rexecutat
      });
  }, [id]);

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
