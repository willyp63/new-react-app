import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import COVCalendar from "./components/COVCalendar";
import COVEventForm from "./components/COVEventForm";
import { COVStoreProvider } from "./store/COVStoreProvider";
import COVEventsContainer from "./components/COVEventsContainer";

const App = () => {
  return (
    <COVStoreProvider>
      <COVEventsContainer>
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
      </COVEventsContainer>
    </COVStoreProvider>
  );
};

export default App;
