import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { calendarReducer as calendar } from "./calendarReducer";

const store = createStore(combineReducers({ calendar }), applyMiddleware(thunk));

export const COVStoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
