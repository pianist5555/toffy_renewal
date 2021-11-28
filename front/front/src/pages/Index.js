import React, { Component } from "react";
import Toffy from "../images/logo-white1.png";
import Rocket from "../images/rocket.gif";
import "../css/bootstrap4-neon-glow.css";

class Index extends Component {
  render() {
    return (
      <div className="Index">
        <div className="Rocket">
          <img src={Rocket} alt="Rocket"  width="300"/>
        </div>
        <div className="Profile">
          프로필
        </div>
        <div className="Carrer">
          경력사항
        </div>
        <div className="Carrer">
          핵심역량
        </div>
        <div className="Carrer">
          보유기술
        </div>
        <div className="Carrer">
          자격사항
        </div>
        <div className="Carrer">
          사이드프로젝트
          <div className="Toffy">
            <a href="/toffy">
              <img src={Toffy} alt="Toffy" />
            </a>
          </div>
        </div>
        <div className="Carrer">
          자기소개서
        </div>
      </div>
    );
  }
}

export default Index;



























