import "./Create.css";
import React from "react";
import { Redirect } from "react-router-dom";

import { Form, Button, Row, Col } from "react-bootstrap";

class Update extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.location.state.title);
    this.state = {
      id: this.props.match.params.id,
      movie_title: this.props.location.state.title,
      poster_url: this.props.location.state.poster,
      release_date: this.convertStampDate(this.props.location.state.date),
      synopsis: this.props.location.state.synopsis,
      redirect: null,
    };

    console.log(this.state);
  }

  onSubmit = () => {
    const object = {
      movie_title: this.state.movie_title,
      poster_url: this.state.poster_url,
      release_date: this.convertDateToUnix(this.state.release_date),
      synopsis: this.state.synopsis,
    };

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(object),
    };
    fetch(`http://localhost:8000/movie/${this.state.id}/`, requestOptions).then(
      (response) => response.json()
    );

    this.setState({ redirect: "/" });
  };

  convertDateToUnix(date) {
    return new Date(date).getTime() / 1000;
  }

  convertStampDate = (unixtimestamp) => {
    // Convert timestamp to milliseconds
    var date = new Date(unixtimestamp * 1000);

    // Year
    var year = date.getFullYear();

    // Month
    var month = ("0" + (date.getMonth() + 1)).slice(-2);

    // Day
    var day = ("0" + date.getDate()).slice(-2);

    // final date
    var convdataTime = year + "-" + month + "-" + day;
    return convdataTime;
  };

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
          Edit Movie Details{" "}
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

export default Update;
