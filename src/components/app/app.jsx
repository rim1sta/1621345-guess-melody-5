import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import DevArtist from "../dev-artist/dev-artist";
import DevGenre from "../dev-genre/dev-genre";
import Result from "../result/result";
import Login from "../login/login";
import GameOver from "../game-over/game-over";

const App = (props) => {
  const {errorsCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen errorsCount={errorsCount} />
        </Route>
        <Route exact path="/dev-artist">
          <DevArtist/>
        </Route>
        <Route exact path="/dev-genre">
          <DevGenre/>
        </Route>
        <Route exact path="/result">
          <Result/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/game-over">
          <GameOver/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};


App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
