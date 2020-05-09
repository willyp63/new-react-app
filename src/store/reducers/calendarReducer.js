import {
  SELECT_CALENDAR_DATE,
  SELECT_CALENDAR_WINDOW,
} from "../actions/calendarActions";

const initialState = {
  /** The date selected on the calendar */
  selectedDate: new Date(),
  /**
   * The window selected on the calendar
   *
   * A window looks just like an event (start, end, roomId)
   *
   * The user selects a window by clicking and dragging on the calendar
   */
  selectedWindow: null,
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CALENDAR_DATE:
      return {
        ...state,
        selectedDate: action.date,
      };
    case SELECT_CALENDAR_WINDOW:
      return {
        ...state,
        selectedWindow: action.window,
      };
    default:
      return state;
  }
};

export const calendarSelectedDateSelector = (state) =>
  state.calendar.selectedDate;
export const calendarSelectedWindowSelector = (state) =>
  state.calendar.selectedWindow;
