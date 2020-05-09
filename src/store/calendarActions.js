import { API_URL } from "../constants/apiConstants";

export const REQUEST_EVENTS = "REQUEST_EVENTS";
const requestEvents = () => {
  return {
    type: REQUEST_EVENTS,
  };
};

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
const receiveGroups = (events) => {
  return {
    type: RECEIVE_EVENTS,
    events,
  };
};

export const fetchEvents = () => {
  return (dispatch) => {
    dispatch(requestEvents());

    fetch(API_URL)
      .then((response) => response.json())
      .then((events) => {
        dispatch(receiveGroups(events));
      });
  };
};

export const ADD_EVENT = "ADD_EVENT";
export const addEvent = (event) => {
  return {
    type: ADD_EVENT,
    event,
  };
};

export const SELECT_DATE = "SELECT_DATE";
export const selectDate = (date) => {
  return {
    type: SELECT_DATE,
    date,
  };
};

export const SET_NEW_EVENT = "SET_NEW_EVENT";
export const setNewEvent = (event) => {
  return {
    type: SET_NEW_EVENT,
    event,
  };
};
