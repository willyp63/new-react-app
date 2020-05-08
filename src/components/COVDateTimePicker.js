import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { DATE_OPTIONS } from "../utils/dateUtils";

/**
 * Input component for picking a date along with a time
 * 
 * Times are all rounded to the nearest quarter hour
 * 
 * @param {string} label label for the input
 * @param {Date} initialValue the initial value for the input
 * @param {Function} onDateTimeChange called whenever the user selects a new date
 */
const COVDateTimePicker = ({ label, initialValue, onDateTimeChange }) => {
  const [date, setDate] = useState(initialValue);
  const [time, setTime] = useState(initialValue.getHours() * 4 + initialValue.getMinutes() / 15);

  const onDateChange = (newDate) => {
    newDate.setHours(Math.floor(time / 4));
    newDate.setMinutes((time % 4) * 15);
    onDateTimeChange(newDate);
    setDate(newDate);
  };

  const onTimeChange = ({ target: { value: newTime } }) => {
    const newDate = new Date(date);
    newDate.setHours(Math.floor(newTime / 4));
    newDate.setMinutes((newTime % 4) * 15);
    onDateTimeChange(newDate);
    setTime(newTime);
  };

  return (
    <>
      <label className="mr-4">{label}</label>
      <DatePicker selected={date} onChange={onDateChange} />
      <select value={time} onChange={onTimeChange} className="cov-select ml-4">
        {DATE_OPTIONS.map(({ value, label }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
};

export default COVDateTimePicker;
