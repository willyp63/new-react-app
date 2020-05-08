import React, { useState, useEffect } from "react";
import COVSelect from "./COVSelect";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { calendarSelector } from "../store/calendarReducer";
import { fetchEvents, addEvent } from "../store/calendarActions";
import {
  EVENT_TIME_OPTIONS,
  getNextQuarterHourMarker,
  getDateWithQuarterHourMarker,
  doDateRangesOverlap,
} from "../utils/dateUtils";
import { randomId } from "../utils/idUtils";
import ReactDatePicker from "react-datepicker";

const COVEventForm = ({ history }) => {
  const dispatch = useDispatch();
  const calendarData = useSelector(calendarSelector);

  // form state
  const [date, setDate] = useState(new Date());
  const [start, setStart] = useState(getNextQuarterHourMarker(new Date()));
  const [end, setEnd] = useState(getNextQuarterHourMarker(new Date()) + 4);
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
    const errors = [];
    const startDate = getDateWithQuarterHourMarker(date, start);
    const endDate = getDateWithQuarterHourMarker(date, end);

    if (start > end) {
      errors.push("End must be greater than start!");
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
        errors.push("Conflicts with an existing event!");
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
        start: getDateWithQuarterHourMarker(date, start),
        end: getDateWithQuarterHourMarker(date, end),
        roomId,
      })
    );
    history.push("/");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form>
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
            options={EVENT_TIME_OPTIONS}
          />
        </div>
        <div className="mb-8">
          <COVSelect
            label="End Time:"
            id="end"
            value={end}
            onChange={({ target: { value: end } }) => setEnd(end)}
            options={EVENT_TIME_OPTIONS}
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
