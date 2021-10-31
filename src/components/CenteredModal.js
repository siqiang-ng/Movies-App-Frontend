import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useHistory } from "react-router-dom";

import { Modal, Button } from "react-bootstrap";

function CenteredModal(props) {
  const { data, onHide } = props;

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const handleDelete = async () => {
    const requestOptions = {
      method: "DELETE",
    };
    fetch(`http://localhost:8000/movie/${data.id}/`, requestOptions).then(
      (response) => response.json()
    );
    await delay(1000);
    window.location.reload(false);
  };

  let history = useHistory();

  const handleUpdate = () => {
    const state = {
      title: data.title,
      poster: data.poster,
      date: data.release_date,
      synopsis: data.overview,
    };

    history.push({
      pathname: `/update/${data.id}`,
      state: state,
    });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {data.title}
        </Modal.Title>
        <div>
          <Button variant="white" onClick={handleUpdate}>
            <i
              className="bi bi-pencil-fill text-danger"
              style={{ fontSize: 30 }}
            ></i>
          </Button>
          <Button variant="white" onClick={handleDelete}>
            <i
              className="bi bi-trash-fill text-danger"
              style={{ fontSize: 30 }}
            ></i>
          </Button>
        </div>
      </Modal.Header>
      <Modal.Body>
        <h5>Overview</h5>
        <p>{data.overview}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CenteredModal;
