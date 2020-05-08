import React from "react";

/**
 * @param {string} label label for the input
 * @param {string} id id for the input
 * @param {Date} value the selected value
 * @param {Function} onChange called whenever the user selects a new time
 * @param {Array} options an array of options, each with a value and label key
 */
const COVSelect = ({ label, id, value, onChange, options }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="cov-select ml-4"
      >
        {options.map(({ value, label }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default COVSelect;
