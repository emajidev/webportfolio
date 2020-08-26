import React, { Component, useState } from "react";
import { FaRegFileCode, FaGithubAlt } from "react-icons/fa";
import { Container, Row, Col, Button } from "reactstrap";
import modal from "../css/modal.css";
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
        <a href={props.item.html_url}>{props.item.html_url} </a>
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
  console.log("img", img);
  props.repos.map((item) => {
    uri =
      "https://raw.githubusercontent.com/emajidev/" +
      item.name +
      "/master/sample.png";
    img.src = uri;
    dif = img.width / img.height;
    if (dif < 0.5) {
      className = "length";
    } else if (dif > 2) {
      className = "horizontal";
    } else {
      className = "big";
    }

    let data = {
      description: item.description,
      url: uri,
      link: item.html_url,
      name: item.name,
      classItem: className,
    };
    newImages.push(data);
  });
  console.log("img", newImages);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  return (
    <div class="container-masonry masonry">
      {newImages.map((repo) => (
        <div className={"item " + repo.classItem}>
          <button
            className="FrontGround"
            onClick={() => {
              setModal(!modal);
              setData(repo);
            }}
          >
            <div>{repo.name}</div>
          </button>
          <img className="img-ajust" src={repo.url} alt="" />
        </div>
      ))}
      {modal ? (
        <div className="contentModal">
          <div className="a-interaction">
            <p className="m-none">{data.name}</p>
            <iframe
              src={data.link}
              marginwidth="0"
              marginheight="0"
              name="ventana_iframe"
              scrolling="no"
              border="0"
              frameborder="0"
              width="100%"
              height="80%"
            ></iframe>
            <p className="m-none">{data.description}</p>
          </div>
          <button
            onClick={() => {
              setModal(!modal);
              setData([]);
            }}
            className="outer-edge"
          />
        </div>
      ) : (
        ""
      )}
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
                repos={this.props.repos}
                listLanguages={this.props.languages}
              />
            </div>
          ) : (
            <div>
              <GalleryProjects repos={this.props.repos} />
            </div>
          )}
        </div>
      </Container>
    );
  }
}
export default Projects;
