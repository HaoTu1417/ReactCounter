import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Grid extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    fetch("http://localhost:3001/getmovies")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("result", result);
          this.setState({ items: result.items });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    return (
      <Container>
        <Row>
          {/* <Col>1 of 3</Col>;<Col>1 of 3</Col>; */}
          {this.state.items.map((item) => (
            <Col>{item.name}</Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Grid;
