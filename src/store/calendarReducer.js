import { REQUEST_EVENTS, RECEIVE_EVENTS, ADD_EVENT } from "./calendarActions";

const initialState = null;

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_EVENTS:
      return initialState;
    case RECEIVE_EVENTS: {
      // convert events to a format that react-big-calendar likes
      const events = action.events.map((event) => ({
        ...event,
        start: new Date(event.start),
        end: new Date(event.end),
        roomId: event.room.id,
        room: null,
      }));

      // create a map of room id to room
      const roomsMap = {};
      action.events.forEach((event) => {
        if (!roomsMap[event.room.id]) {
          roomsMap[event.room.id] = event.room;
        }
      });

      // all the rooms with events
      const rooms = Object.values(roomsMap);

      return {
        events,
        rooms,
        roomsMap,
      };
    }
    case ADD_EVENT: {
      if (!state) {
        return initialState;
      }
      return {
        ...state,
        events: [...state.events, action.event],
      };
    }
    default:
      return state;
  }
};

export const calendarSelector = (state) => state.calendar;
