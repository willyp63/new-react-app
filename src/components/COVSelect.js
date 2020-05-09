import React from "react";
import PropTypes from "prop-types";

/**
 * A custom select component with label
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

COVSelect.propTypes = {
  /** label for the input */
  label: PropTypes.string,
  /** id for the input */
  id: PropTypes.string,
  /** the selected value */
  value: PropTypes.any,
  /** called whenever the user selects a new time */
  onChange: PropTypes.func,
  /** an array of options, each with a value and label key */
  options: PropTypes.arrayOf(
    PropTypes.shape({ value: PropTypes.any, label: PropTypes.string })
  ),
};

export default COVSelect;
