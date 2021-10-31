import React from "react";
import {
  Navbar,
  Nav,
  // , Form, FormControl, Button
} from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <div className="container-fluid">
        <Navbar.Brand href="/">Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="/create">New movie</Nav.Link>
          </Nav>
          {/* <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="pr-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navigation;
