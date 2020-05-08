import React, { useState, useEffect } from "react";
import COVSelect from "./COVSelect";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { calendarSelector } from "../store/calendarReducer";
import { fetchEvents, addEvent } from "../store/calendarActions";
import {
  getStepAfterDate,
  getDateWithStep,
  doDateRangesOverlap,
  getTimeStepOptions,
} from "../utils/dateUtils";
import { randomId } from "../utils/idUtils";
import ReactDatePicker from "react-datepicker";
import {
  CALENDAR_STEP,
  CALENDAR_DEFAULT_EVENT_LENGTH,
} from "../constants/calendarConstants";

const COVEventForm = ({ history }) => {
  const dispatch = useDispatch();
  const calendarData = useSelector(calendarSelector);

  // form state
  const [date, setDate] = useState(new Date());
  const [start, setStart] = useState(getStepAfterDate(new Date()));
  const [end, setEnd] = useState(
    getStepAfterDate(new Date()) + CALENDAR_DEFAULT_EVENT_LENGTH
  );
  const [roomId, setRoomId] = useState(null);
  const [errors, setErrors] = useState([]);

  // fetch calendar data if it is not in the store
  // TODO: duplicate code in COVCalendar.js
  useEffect(() => {
    if (!calendarData) {
      dispatch(fetchEvents());
    } else {
      // once calendar data is loaded, set the selected roomId to the first room
      setRoomId(calendarData.rooms[0].id);
    }
  }, [calendarData, dispatch]);

  useEffect(() => {
    if (!calendarData) {
      return;
    }

    const errors = [];
    const startDate = getDateWithStep(date, start);
    const endDate = getDateWithStep(date, end);

    if (start > end) {
      errors.push("End Time must be greater than Start Time");
    }

    for (let i = 0; i < calendarData.events.length; i++) {
      const event = calendarData.events[i];

      // if the event is on another day or in another room, ignore it
      if (
        event.start.toDateString() !== date.toDateString() ||
        event.roomId !== roomId
      ) {
        continue;
      }

      // check if the 2 events overlap
      if (doDateRangesOverlap(event.start, event.end, startDate, endDate)) {
        errors.push("Conflicts with an existing event");
        break;
      }
    }

    setErrors(errors);
  }, [date, start, end, roomId, calendarData]);

  if (!calendarData) {
    return null; // TODO: loading ui
  }

  const onSubmit = (e) => {
    // add the event to the store and navigate back to calendar view
    e.preventDefault();
    dispatch(
      addEvent({
        id: randomId(),
        start: getDateWithStep(date, start),
        end: getDateWithStep(date, end),
        roomId,
      })
    );
    history.push("/");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form style={{ width: 300 }}>
        <div className="flex flex-col items-center text-red-500 mb-8">
          {errors.map((error) => (
            <span key={error}>{error}</span>
          ))}
        </div>
        <div className="mb-8">
          <label htmlFor="date" className="mr-4">
            Date:
          </label>
          <ReactDatePicker id="date" selected={date} onChange={setDate} />
        </div>
        <div className="mb-8">
          <COVSelect
            label="Start Time:"
            id="start"
            value={start}
            onChange={({ target: { value: start } }) => setStart(start)}
            options={getTimeStepOptions(CALENDAR_STEP)}
          />
        </div>
        <div className="mb-8">
          <COVSelect
            label="End Time:"
            id="end"
            value={end}
            onChange={({ target: { value: end } }) => setEnd(end)}
            options={getTimeStepOptions(CALENDAR_STEP)}
          />
        </div>
        <div className="mb-8">
          <COVSelect
            label="Room:"
            id="room"
            value={roomId || ""}
            onChange={({ target: { value: roomId } }) => setRoomId(roomId)}
            options={calendarData.rooms.map(({ name, id }) => ({
              value: id,
              label: name,
            }))}
          />
        </div>
        <div className="flex justify-end">
          <Link to="/" className="cov-btn mr-4">
            Cancel
          </Link>
          <button
            type="submit"
            className="cov-btn"
            onClick={onSubmit}
            disabled={errors.length > 0}
          >
            Save!
          </button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(COVEventForm);
