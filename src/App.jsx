import "./App.css";
//import Appgg from './test'
import { Route, Routes } from "react-router-dom";
import Add from "./components/Add/Add";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import NavBar from "./components/NavBar/Navbar";
import Movie from "./components/Movie/Movie";
import MoviesEditDelete from "./components/MoviesEditDelete/MoviesEditDelete";
import Edit from "./components/Edit/Edit";
import Recomand from "./components/Recomand/Recomand";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/test" element={<div>TEST</div>} />
        {/* exemplu ca asteapta html */}
        <Route path="/home" element={<Home />} />
        <Route path="/edit-delete" element={<MoviesEditDelete />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/add" element={<Add />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/recomand" element={<Recomand />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
