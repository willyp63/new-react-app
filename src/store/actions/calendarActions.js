export const SELECT_CALENDAR_DATE = "SELECT_CALENDAR_DATE";
export const selectCalendarDate = (date) => {
  return {
    type: SELECT_CALENDAR_DATE,
    date,
  };
};

export const SELECT_CALENDAR_WINDOW = "SELECT_CALENDAR_INDOW";
export const selectCalendarWindow = (window) => {
  return {
    type: SELECT_CALENDAR_WINDOW,
    window,
  };
};
