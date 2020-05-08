import React, { useState } from "react";
import COVDateTimePicker from "./COVDateTimePicker";
import { Link } from "react-router-dom";

const COVEventForm = () => {
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  return (
    <form>
      <div className="mb-8">
        <COVDateTimePicker label="Start:" onDateTimeChange={setStart} />
      </div>
      <div className="mb-8">
        <COVDateTimePicker label="End:" onDateTimeChange={setEnd} />
      </div>
      <div className="flex justify-end">
        <Link to="/" className="cov-btn mr-4">
          Cancel
        </Link>
        <button type="submit" className="cov-btn">
          Save!
        </button>
      </div>
    </form>
  );
};

export default COVEventForm;
