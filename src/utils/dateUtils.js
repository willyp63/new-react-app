import { CALENDAR_STEP } from "../constants/calendarConstants";

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

export const getStepAfterDate = (date) => {
  const totalMinutes = date.getHours() * 60 + date.getMinutes();
  return Math.ceil(totalMinutes / CALENDAR_STEP);
};

export const getDateWithStep = (date, step) => {
  const dateWithMarker = new Date(date);
  dateWithMarker.setHours(Math.floor(step / (60 / CALENDAR_STEP)));
  dateWithMarker.setMinutes((step % (60 / CALENDAR_STEP)) * CALENDAR_STEP);
  dateWithMarker.setSeconds(0);
  dateWithMarker.setMilliseconds(0);
  return dateWithMarker;
};

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

export const getTimeStepOptions = (() => {
  const cache = {};
  const fn = (step) => {
    if (cache[step]) {
      return cache[step];
    }

    const options = [];
    for (let i = 0; i < (24 * 60) / step; i++) {
      const date = new Date("December 17, 1995 00:00:00");
      date.setHours(Math.floor(i / (60 / CALENDAR_STEP)));
      date.setMinutes((i % (60 / CALENDAR_STEP)) * CALENDAR_STEP);
      options.push({ label: formatTimeAMPM(date), value: i });
    }

    cache[step] = options;
    return options;
  };
  return fn;
})();
