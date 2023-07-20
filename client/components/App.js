import React from "react";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
//components
import Home from "./Home";
import AuthForm from "./Auth.js";
import PlantList from "./plants/PlantList";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/signup"
          render={(props) => <AuthForm {...props} isLogin={false} />}
        />
        <Route
          exact
          path="/login"
          render={(props) => <AuthForm {...props} isLogin={true} />}
        />
        <Route
          exact
          path="/plants"
          render={(props) => <PlantList {...props} />}
        />
      </Switch>
    </div>
  );
};

export default App;
