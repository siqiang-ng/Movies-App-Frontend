import React, { useState } from "react";

import { Container, Card, Button } from "react-bootstrap";
import CenteredModal from "./CenteredModal";

function convertStampDate(unixtimestamp) {
  // Months array
  var months_arr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Convert timestamp to milliseconds
  var date = new Date(unixtimestamp * 1000);

  // Year
  var year = date.getFullYear();

  // Month
  var month = months_arr[date.getMonth()];

  // Day
  var day = date.getDate();

  // // Hours
  // var hours = date.getHours();

  // // Minutes
  // var minutes = "0" + date.getMinutes();

  // // Seconds
  // var seconds = "0" + date.getSeconds();

  // final date
  var convdataTime = day + " " + month + " " + year;
  return convdataTime;
}

const MovieCard = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container className="p-3">
      <Card
        key={data.id}
        border="light"
        bg="dark"
        text="white"
        className="text-center"
      >
        <Card.Img variant="top" src={data.poster} responsive />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>
            Release Date:{" "}
            <strong> {convertStampDate(data.release_date)} </strong>
          </Card.Text>
          <Button variant="outline-light" onClick={() => setShowModal(true)}>
            Read more
          </Button>
          <CenteredModal
            show={showModal}
            onHide={() => setShowModal(false)}
            title={data.title}
            overview={data.overview}
          />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MovieCard;
