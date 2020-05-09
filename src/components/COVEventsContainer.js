import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchEvents } from "../store/actions/eventActions";

const COVEventsContainer = ({ children }) => {
  // fetch events from API
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchEvents()), [dispatch]);

  return <>{children}</>;
};

export default COVEventsContainer;
