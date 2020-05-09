import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { eventsReducer as events } from "./reducers/eventsReducer";
import { roomsReducer as rooms } from "./reducers/roomsReducer";
import { calendarReducer as calendar } from "./reducers/calendarReducer";

const store = createStore(
  combineReducers({ events, rooms, calendar }),
  applyMiddleware(thunk)
);

export const COVStoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
