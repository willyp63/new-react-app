import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchEvents } from "../store/actions/eventActions";

/**
 * Container component for fetching events from the API.
 */
const COVEventsContainer = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchEvents()), [dispatch]);

  return <>{children}</>;
};

export default COVEventsContainer;
