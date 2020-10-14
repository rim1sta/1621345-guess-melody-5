import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import DevArtist from "../dev-artist/dev-artist";
import DevGenre from "../dev-genre/dev-genre";
import Result from "../result/result";
import Login from "../login/login";
import GameOver from "../game-over/game-over";
import GameScreen from "../game-screen/game-screen";

const App = (props) => {
  const {errorsCount, questions} = props;
  const [firstQuestion, secondQuestion] = questions;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={({history})=> (
            <WelcomeScreen
              onPlayButtonClick={()=> history.push(`/game`)}
              errorsCount={errorsCount}
            />
          )}
        />

        <Route exact path="/dev-artist">
          <DevArtist
            question={secondQuestion}
            onAnswer={() => {}}
          />
        </Route>
        <Route exact path="/dev-genre">
          <DevGenre
            question={firstQuestion}
            onAnswer={() => {}}
          />
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
        <Route exact path="/game">
          <GameScreen
            errorsCount={errorsCount}
            questions={questions} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};


App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
