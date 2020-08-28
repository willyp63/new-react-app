import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { StoreProvider } from "./store/StoreProvider";
import Home from "./components/Home";

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </StoreProvider>
  );
};

export default App;
