import React from "react";

import { Pagination } from "react-bootstrap";
import "./CusPagination.css";

const CusPagination = ({
  moviesPerPage,
  totalMovies,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pt-4">
      <Pagination className="d-flex justify-content-center">
        {pageNumbers.map((number) => (
          <Pagination.Item
            onClick={() => paginate(number)}
            key={number}
            active={number === currentPage}
            className="item"
          >
            {number}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default CusPagination;
