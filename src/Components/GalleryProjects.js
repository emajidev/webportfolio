import React, { Component } from "react";
import grid from "../css/grid.css";

class GalleryProjects extends Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    console.log("hola", this.props);
  }
  render() {
    return (
      <div class="container-masonry masonry">
        <div class="item big">
          <img
            class="img-ajust"
            src="https://raw.githubusercontent.com/emajidev/masonrytemplate/master/sample.png"
            alt=""
          />
        </div>
        <div class="item length">
          <img
            class="img-ajust"
            src="https://raw.githubusercontent.com/emajidev/vectorclocks/master/sample.png"
            alt=""
          />
        </div>
      </div>
    );
  }
}
export default GalleryProjects;
