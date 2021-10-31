import React from "react";
import MovieCard from "./MovieCard";

import { Row, Col } from "react-bootstrap";

const MovieContainer = ({ movies }) => {
  const movieCards = movies.map((movie, index) => {
    return (
      <Col sm="6" md="4" lg="3" className="d flex" key={movie.id}>
        <MovieCard data={movie}></MovieCard>
      </Col>
    );
  });

  return (
    <>
      <div className="container-fluid d-flex justify-content-around">
        <Row>{movieCards}</Row>
      </div>
    </>
  );
};

export default MovieContainer;
