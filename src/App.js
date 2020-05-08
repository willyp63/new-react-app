import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import COVCalendar from "./components/COVCalendar";
import COVEventForm from "./components/COVEventForm";
import { COVStoreProvider } from "./store/COVStoreProvider";

const App = () => {
  return (
    <COVStoreProvider>
      <Router>
        <Switch>
          <Route path="/new">
            <COVEventForm />
          </Route>
          <Route path="/">
            <COVCalendar />
          </Route>
        </Switch>
      </Router>
    </COVStoreProvider>
  );
};

export default App;
