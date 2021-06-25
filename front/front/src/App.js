import React, { Component } from "react";
import { Route } from "react-router-dom";
import Index from "./pages/Index";
import MyPage from "./pages/MyPage";
import ToffyHome from "./pages/ToffyHome";
import GameListContainer from './containers/GameListContainer'

import "./css/index.css";


class App extends Component {

  componentDidMount(){
    document.title = "Toffy"
  }

  render() {
    return (
      <div className="font">
        {" "}
        <Route path="/g" component={GameListContainer} />{" "}
        <Route exact path="/" component={Index} />{" "}
        <Route exact path="/toffy" component={ToffyHome} />{" "}
        <Route exact path='/toffy/contact'render={() => <MyPage lang={""} />}/>{" "}
      </div>
    );
  }
}
export default App;
