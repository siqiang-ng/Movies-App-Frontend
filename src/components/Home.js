import React, { useState, useEffect } from "react";

import MovieContainer from "./MovieContainer";
import CusPagination from "./CusPagination";

function Home() {
  const [movies, setMovies] = useState([]);

  function parseData(data) {
    data.forEach((d) => {
      setMovies((prevState) => [
        ...prevState,
        {
          id: d.id,
          title: d.movie_title,
          poster: d.poster_url,
          release_date: d.release_date,
          overview: d.synopsis,
        },
      ]);
    });
  }

  useEffect(() => {
    fetch("http://localhost:8000/movie/")
      .then((response) => response.json())
      .then((data) => parseData(data));
  }, []);

  const moviesPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);

  // Get current movies
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
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
    </>
  );
}

export default Home;
