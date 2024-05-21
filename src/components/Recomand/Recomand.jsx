import useFetchMovies from "../../hooks/useFetchMovie";
import useLocalStorage from "../../hooks/useLocalStorage";
import { AddButton as ResetButton } from "../Edit/Edit.style";
import { MovieImgSingle } from "../Movie/Movie.style";
import {
  CardImgContainer,
  CardInfoContainer,
  Text,
  Title,
  UperText,
} from "../Movies/MovieCard/MovieCard.style";
import { RecomandContainer } from "./Recomand.style";

function Recomand() {
  const getRecomandMovie = (localData) => {
    for (let index = 0; index < localData.length; index++) {}
  }; // TODO Recomandare Film

  const { movies: movie, error, loading } = useFetchMovies("/" + 1);
  const { resetLocalData, localData } = useLocalStorage("movies");

  return (
    <RecomandContainer>
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
      <ResetButton onClick={() => resetLocalData()}> Reset</ResetButton>
    </RecomandContainer>
  );
}

export default Recomand;
