import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";
import { Icon, InlineIcon } from "@iconify/react";
import reduxIcon from "@iconify/icons-simple-icons/redux";
import androidStudio from "@iconify/icons-mdi/android-studio";
import logoJupyter from "@iconify/icons-carbon/logo-jupyter";
import microsoftVisualStudioCode from "@iconify/icons-mdi/microsoft-visual-studio-code";
import {
  DiReact,
  DiJavascript1,
  DiPython,
  DiCode,
  DiNodejsSmall,
  DiPhp,
  DiGit,
  DiFirebase,
  DiSqllite,
  DiLaravel,
  DiMysql,
  DiHtml5,
  DiVim,
  DiLinux,
} from "react-icons/di";
import { FaVuejs, FaDocker, FaAws } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { GiSmartphone } from "react-icons/gi";

class Skills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className="Skills">
        <Row>
          <Col>
            <h4> Skills </h4>
          </Col>
        </Row>
        <Row>
          <Col> - - - - - - - - - - </Col>
        </Row>

        <Row xs lg="6">
          <Col>
            <DiJavascript1 size={50} />
            <p>Vainilla Js</p>
          </Col>
          <Col>
            <DiPython size={50} />
            <p>Python</p>
          </Col>
          <Col>
            <DiCode size={50} />
            <p>Clean Code</p>
          </Col>
          <Col>
            <DiHtml5 size={50} />
            <p>HTML/CSS</p>
          </Col>
          <Col>
            <AiOutlineConsoleSql size={50} />
            <p>Sql</p>
          </Col>
          <Col>
            <DiPhp size={50} />
            <p>Php</p>
          </Col>
          <Col>
            <DiLaravel size={50} />
            <p>Laravel</p>
          </Col>
          <Col>
            <DiGit size={50} />
            <p>Git</p>
          </Col>
          <Col>
            <DiReact size={50} />
            <p>React</p>
          </Col>
          <Col>
            <GiSmartphone size={50} />
            <p>React Native</p>
          </Col>
          <Col>
            <Icon icon={reduxIcon} fontSize={50} />
            <p>Redux</p>
          </Col>
          <Col>
            <FaVuejs size={50} />
            <p>VueJs</p>
          </Col>
          <Col>
            <DiNodejsSmall size={50} />
            <p>Node Js</p>
          </Col>
          <Col>
            <FaDocker size={50} />
            <p>Docker</p>
          </Col>
          <Col>
            <DiMysql size={50} />
            <p>MySql</p>
          </Col>
          <Col>
            <DiSqllite size={50} />
            <p>SqlLite</p>
          </Col>
          <Col>
            <DiFirebase size={50} />
            <p>Firebase</p>
          </Col>
          <Col>
            <FaAws size={50} />
            <p>AWS</p>
          </Col>
          <Col>
            <Icon icon={microsoftVisualStudioCode} fontSize={50} />
            <p>VScode</p>
          </Col>
          <Col>
            <DiVim size={50} />
            <p>Vim</p>
          </Col>
          <Col>
            <Icon icon={androidStudio} fontSize={50} />
            <p>Android Studio</p>
          </Col>
          <Col>
            <Icon icon={logoJupyter} fontSize={50} />
            <p>Jupyter</p>
          </Col>
          <Col>
            <DiLinux size={50} />
            <p>Linux</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Skills;
