import React, { Component } from "react";
import Toffy from "../images/logo-white1.png";
import Rocket from "../images/rocket.gif";
import "../css/bootstrap4-neon-glow.css";

class Index extends Component {
  render() {
    return (
      <div className="Index">
        <div className="Toffy">
          <a href="/toffy">
            <img src={Toffy} alt="Toffy" />
            
          </a>
        </div>
        <div className="Rocket">
          <img src={Rocket} alt="Rocket"  width="300"/>
        </div>
      </div>
    );
  }
}

export default Index;



























