import React, { Component, useState } from "react";
import { FaRegFileCode, FaGithubAlt } from "react-icons/fa";
import { Container, Row, Col, Button } from "reactstrap";

import grid from "../css/grid.css";
function DetailRepo(props) {
  return (
    <ul>
      <li className="infoRepo">
        <p className="textInfoRepo">Created_at: </p>
        <p>{props.item.created_at}</p>
      </li>
      <div className="infoRepo">
        <p className="textInfoRepo">Languages: </p>
        {props.listLanguages[props.index].map((len, ilen) => (
          <p style={{ marginRight: 10 }} key={ilen}>
            {ilen + 1 < props.listLanguages[props.index].length
              ? len + ","
              : len + "."}
          </p>
        ))}
      </div>
      <li className="infoRepo">
        <p className="textInfoRepo">Description: </p>
        <p> {props.item.description}</p>
      </li>
      <li className="infoRepo">
        <p className="textInfoRepo">Link: </p>
        <a>{props.item.html_url} </a>
      </li>
    </ul>
  );
}
function Item(props) {
  const [info, setInfo] = useState(false);
  return (
    <li key={props.item.id} className="rowRepo">
      <button onClick={() => setInfo(!info)}>
        <p styles={{ fontSize: 12 }}>
          <FaRegFileCode size={20} /> {props.item.name}
        </p>
      </button>
      {info ? (
        <DetailRepo
          item={props.item}
          index={props.index}
          listLanguages={props.listLanguages}
        />
      ) : (
        console.log("")
      )}
    </li>
  );
}
function ListRepos(props) {
  const [info, setInfo] = useState(false);
  return (
    <ul className="fileRepo">
      {props.repos.map((item, index) => (
        <Item item={item} index={index} listLanguages={props.listLanguages} />
      ))}
    </ul>
  );
}
function GalleryProjects(props) {
  console.log("glr", props);
  let newImages = [];
  let uri, className, dif;
  let img = new Image();
  props.repos.map((item) => {
    uri =
      "https://raw.githubusercontent.com/emajidev/" +
      item.name +
      "/master/sample.png";
    img.src = uri;
    dif = img.width / img.height;
    console.log(item.uri);
    console.log("tamaño", img.width, img.height, dif);
    if (dif < 0.5) {
      className = "length";
    } else if (dif > 2) {
      className = "horizontal";
    } else {
      className = "big";
    }

    let data = {
      url: uri,
      name: item.name,
      classItem: className,
    };
    newImages.push(data);
  });
  console.log("img", newImages);
  return (
    <div class="container-masonry masonry">
      {newImages.map((repo) => (
        <div className={"item " + repo.classItem}>
          <div className="FrontGround">{repo.name}</div>
          <img className="img-ajust" src={repo.url} alt="" />
        </div>
      ))}
    </div>
  );
}
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      listLanguages: [],
      file: "galery",
    };
  }

  getReposGit() {
    return fetch(
      "https://api.github.com/users/emajidev/repos"
    ).then((response) => response.json());
  }
  getLanguages(repos) {
    let listLanguages = [];
    var xmlHttp = new XMLHttpRequest();
    repos.map((item) => {
      xmlHttp.open("GET", item.languages_url, false); // false for synchronous request
      xmlHttp.send(null);
      let response = JSON.parse(xmlHttp.response);
      let array = Object.keys(response);
      listLanguages.push(array);
    });
    return listLanguages;
  }
  async componentDidMount() {
    let getRepos = await this.getReposGit();
    let getLanguages = await this.getLanguages(getRepos);
    this.setState({ repos: getRepos, listLanguages: getLanguages });
  }

  render() {
    return (
      <Container>
        <div className="Projects">
          <FaGithubAlt size={50} />
          <h4>Projects</h4>
          <p style={{ textAlign: "left" }}>Show my repos in Git hub</p>
          <Row className="selection">
            <Col className={this.state.file == "galery" ? "select" : "none"}>
              <button onClick={() => this.setState({ file: "galery" })}>
                Mosaik
              </button>
            </Col>
            <Col className={this.state.file == "file" ? "select" : "none"}>
              <button onClick={() => this.setState({ file: "file" })}>
                File
              </button>
            </Col>
          </Row>
          {this.state.file == "file" ? (
            <div>
              <ListRepos
                repos={this.state.repos}
                listLanguages={this.state.listLanguages}
              />
            </div>
          ) : (
            <div>
              <GalleryProjects repos={this.state.repos} />
            </div>
          )}
        </div>
      </Container>
    );
  }
}
export default Projects;
