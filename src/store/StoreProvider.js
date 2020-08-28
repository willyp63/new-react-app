import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const store = createStore(combineReducers({}), applyMiddleware(thunk));

export const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
