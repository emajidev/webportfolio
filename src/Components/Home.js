import React, { Component } from "react";
import Skills from "./Skills";
import Projects from "./Projects";
import { Container, Row, Col } from "reactstrap";
import Mode from "./Mode";
class Home extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-left">
          <Col md="12" xs="12" lg="12">
            <h1 className="Name">Emanuel Jimenez</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-left">
          <Col md="12" xs="12" lg="12">
            <h2 className="Profession"> Full-Stack Developer</h2>
          </Col>
        </Row>
        <Row>
          <div className="About-me">
            <h2>About Me</h2>
            <p>
              Software developer and certified Linux administrator, with a great
              interest in the creation of IT solutions related to social
              problems and technological advances using the latest trends in
              Front-End and Back-End development as well as the use of agile
              methodologies to achieve common goals.
            </p>
          </div>
        </Row>
        <div className="Center">
          <div className="Btn-contact">
            <p>if you want to materialize your projects do not hesitate...</p>
            <div>
              <p className="Typewriter">contact me</p>
            </div>
          </div>
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Projects />
        </div>
      </Container>
    );
  }
}

export default Home;
