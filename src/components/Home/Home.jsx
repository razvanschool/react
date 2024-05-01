import { HomeContainer } from "./Home.style";
import MovieCard from "./../MovieCard/MovieCard";

export const movies = [
  {
    id: 1,
    title: "Titlu",
    year: 1998,
    rating: 4.5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXm4MEQhlq-wMhXdPH_iluL9glAKSR0en0_cuo5PF4Cg&s",
    description: "Ceva descriere",
    category: "Action",
  },
  {
    id: 2,
    title: "Alt Titlu",
    year: 2005,
    rating: 3.8,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXm4MEQhlq-wMhXdPH_iluL9glAKSR0en0_cuo5PF4Cg&s",
    description: "Descriere alt film",
    category: "Drama",
  },
  {
    id: 3,
    title: "Alt Film",
    year: 2010,
    rating: 4.2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXm4MEQhlq-wMhXdPH_iluL9glAKSR0en0_cuo5PF4Cg&s",
    description: "Descrierea altui film",
    category: "Comedy",
  },
  // Adaugă alte filme aici folosind același format
  {
    id: 4,
    title: "Another Movie",
    year: 2015,
    rating: 4.0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXm4MEQhlq-wMhXdPH_iluL9glAKSR0en0_cuo5PF4Cg&s",
    description: "Description of another movie",
    category: "Thriller",
  },
  {
    id: 5,
    title: "Sci-Fi Adventure",
    year: 2008,
    rating: 4.7,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXm4MEQhlq-wMhXdPH_iluL9glAKSR0en0_cuo5PF4Cg&s",
    description: "Exciting sci-fi adventure description",
    category: "Science Fiction",
  },
  {
    id: 6,
    title: "Romantic Comedy",
    year: 2012,
    rating: 4.1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXm4MEQhlq-wMhXdPH_iluL9glAKSR0en0_cuo5PF4Cg&s",
    description: "Heartwarming romantic comedy plot",
    category: "Romance",
  },
  {
    id: 7,
    title: "Horror Flick",
    year: 2019,
    rating: 4.3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXm4MEQhlq-wMhXdPH_iluL9glAKSR0en0_cuo5PF4Cg&s",
    description: "Scary horror movie synopsis",
    category: "Horror",
  },
  {
    id: 8,
    title: "Animated Feature",
    year: 2003,
    rating: 4.6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXm4MEQhlq-wMhXdPH_iluL9glAKSR0en0_cuo5PF4Cg&s",
    description: "Charming animated film description",
    category: "Animation",
  },
  {
    id: 9,
    title: "Mystery Thriller",
    year: 2017,
    rating: 4.4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXm4MEQhlq-wMhXdPH_iluL9glAKSR0en0_cuo5PF4Cg&s",
    description: "Intriguing mystery thriller plot",
    category: "Mystery",
  },
];

function Home() {
  return (
    <HomeContainer>
      {movies.map((movie) => (
        <MovieCard title={"test"} img={movie.img} {...movie} />
      ))}
    </HomeContainer>
  );
}

export default Home;
