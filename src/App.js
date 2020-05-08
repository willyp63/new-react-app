import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import COVCalendarContainer from "./components/COVCalendarContainer";
import COVEventForm from "./components/COVEventForm";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/new">
          <COVEventForm />
        </Route>
        <Route path="/">
          <COVCalendarContainer />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
