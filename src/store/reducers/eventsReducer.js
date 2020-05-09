import { RECEIVE_EVENTS, ADD_EVENT } from "../actions/eventActions";

/** A list of events */
const initialState = null;

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_EVENTS:
      // convert events to a format that react-big-calendar likes
      return action.events.map((event) => ({
        start: new Date(event.start),
        end: new Date(event.end),
        roomId: event.room.id,
      }));
    case ADD_EVENT:
      return [...state, action.event];
    default:
      return state;
  }
};

export const eventsSelector = (state) => state.events;
