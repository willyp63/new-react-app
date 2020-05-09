import { RECEIVE_EVENTS } from "../actions/eventActions";

/** A map of room id to room */
const initialState = null;

export const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_EVENTS: {
      const rooms = {};
      action.events.forEach((event) => (rooms[event.room.id] = event.room));
      return rooms;
    }
    default:
      return state;
  }
};

export const roomsSelector = (state) => state.rooms;
