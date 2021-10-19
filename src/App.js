import "./App.css";
import React, { useState } from "react";

import movies from "./data/movies-with-images.json";
import Navigation from "./components/Navigation";
import MovieContainer from "./components/MovieContainer";
import CusPagination from "./components/CusPagination";

function App() {
  const [moviesPerPage, setMoviesPerPage] = useState(1000);
  const [currentPage, setCurrentPage] = useState(1);

  // Get current movies
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div
      style={{
        backgroundColor: "#282c34",
      }}
    >
      <Navigation />
      <CusPagination
        moviesPerPage={moviesPerPage}
        totalMovies={movies.length}
        paginate={paginate}
      />
      <MovieContainer movies={currentMovies} />
      <CusPagination
        moviesPerPage={moviesPerPage}
        totalMovies={movies.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
