import { CALENDAR_STEP_SIZE } from "../constants/calendarConstants";

/**
 * @returns true if the range [start1] - [end1] overlaps [start2] - [end2]
 */
export const doDateRangesOverlap = (start1, end1, start2, end2) => {
  if (start1 > start2 && start1 < end2) {
    return true;
  }
  if (end1 > start2 && end1 < end2) {
    return true;
  }
  if (start1 <= start2 && end1 >= end2) {
    return true;
  }
  return false;
};

/**
 * @returns the calendar step closest to [date]
 */
export const getStepFromDate = (date) => {
  const totalMinutes = date.getHours() * 60 + date.getMinutes();
  return Math.ceil(totalMinutes / CALENDAR_STEP_SIZE);
};

/**
 * @returns a new date with the year/month/day from [date] and
 * the hours/minutes/seconds/milliseconds from [step]
 */
export const getDateWithStep = (date, step) => {
  const dateWithMarker = new Date(date);
  dateWithMarker.setHours(Math.floor(step / (60 / CALENDAR_STEP_SIZE)));
  dateWithMarker.setMinutes((step % (60 / CALENDAR_STEP_SIZE)) * CALENDAR_STEP_SIZE);
  dateWithMarker.setSeconds(0);
  dateWithMarker.setMilliseconds(0);
  return dateWithMarker;
};

/**
 * @returns the time string version of [date] in am/pm format (example: `12:30 am`)
 */
const formatTimeAMPM = (date) => {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

/**
 * @param {number} step the amount of minutes between time options
 * 
 * @returns an array of time step options
 */
export const getTimeStepOptions = (() => {
  // memoize results
  const cache = {};
  const fn = (step) => {
    if (cache[step]) {
      return cache[step];
    }

    const options = [];
    for (let i = 0; i < (24 * 60) / step; i++) {
      const date = new Date("December 17, 1995 00:00:00");
      date.setHours(Math.floor(i / (60 / CALENDAR_STEP_SIZE)));
      date.setMinutes((i % (60 / CALENDAR_STEP_SIZE)) * CALENDAR_STEP_SIZE);
      options.push({ label: formatTimeAMPM(date), value: i });
    }

    cache[step] = options;
    return options;
  };
  return fn;
})();
