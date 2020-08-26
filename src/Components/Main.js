import React, { Component } from "react";
import Home from "./Home";
import Background from "./Background";

function Page(props) {
  return (
    <div>
      <Home repos={props.repos} languages={props.languages} />
      <Background />
    </div>
  );
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: null,
      listLanguages: null,
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
      <div className="Main">
        {this.state.repos != null && this.state.listLanguages ? (
          <Page repos={this.state.repos} languages={this.state.listLanguages} />
        ) : (
          <div>
            <h1 style={{ color: "black" }}>CARGANDO</h1>
          </div>
        )}
      </div>
    );
  }
}

export default Main;
