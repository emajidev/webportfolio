import React, { Component } from "react";
import Particles from "react-particles-js";

class Background extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Particles
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: false,
                color: "#3CA9D1",
                blur: 0,
              },
            },
          },
        }}
        style={{
          width: "100%",
          position: "fixed",
          background: "black",
          zIndex: -9,
        }}
      />
    );
  }
}
export default Background;
