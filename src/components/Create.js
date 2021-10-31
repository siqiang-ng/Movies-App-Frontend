import "./Create.css";
import React from "react";
import { Redirect } from "react-router-dom";

import { Form, Button, Row, Col } from "react-bootstrap";

class Create extends React.Component {
  state = {
    movie_title: "",
    poster_url: "",
    release_date: "",
    synopsis: "",
    redirect: null,
  };

  onSubmit = () => {
    const object = {
      movie_title: this.state.movie_title,
      poster_url: this.state.poster_url,
      release_date: this.convertDateToUnix(this.state.release_date),
      synopsis: this.state.synopsis,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(object),
    };
    fetch("http://localhost:8000/movie/", requestOptions).then((response) =>
      response.json()
    );

    this.setState({ redirect: "/" });
  };

  convertDateToUnix(date) {
    console.log(date);
    return new Date(date).getTime() / 1000;
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div>
        <h2
          style={{
            color: "white",
            margin: 20,
          }}
        >
          {" "}
          Add a new movie{" "}
        </h2>
        <div className="p-3">
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formMovieTitle">
              <Form.Label column sm={1}>
                Movie Title
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  type="text"
                  value={this.state.movie_title}
                  onChange={(e) =>
                    this.setState({ movie_title: e.target.value })
                  }
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPoster">
              <Form.Label column sm={1}>
                Poster URL
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  value={this.state.poster_url}
                  onChange={(e) =>
                    this.setState({ poster_url: e.target.value })
                  }
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formReleaseDate">
              <Form.Label column sm={1}>
                Release Date
              </Form.Label>
              <Col sm={2}>
                <Form.Control
                  type="date"
                  value={this.state.release_date}
                  onChange={(e) =>
                    this.setState({
                      release_date: e.target.value,
                    })
                  }
                />
              </Col>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSynopsis">
              <Form.Label>Synopsis</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Movie Overview"
                value={this.state.synopsis}
                onChange={(e) => this.setState({ synopsis: e.target.value })}
              />
            </Form.Group>
            <Button variant="light" onClick={this.onSubmit}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Create;
