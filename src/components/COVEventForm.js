import React, { useState, useEffect } from "react";
import COVSelect from "./COVSelect";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addEvent } from "../store/actions/eventActions";
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
  CALENDAR_DEFAULT_EVENT_START,
} from "../constants/calendarConstants";
import {
  calendarSelectedWindowSelector,
  calendarSelectedDateSelector,
} from "../store/reducers/calendarReducer";
import { eventsSelector } from "../store/reducers/eventsReducer";
import { roomsSelector } from "../store/reducers/roomsReducer";

const COVEventForm = ({ history }) => {
  const dispatch = useDispatch();
  const events = useSelector(eventsSelector);
  const rooms = useSelector(roomsSelector);
  const selectedDate = useSelector(calendarSelectedDateSelector);
  const selectedWindow = useSelector(calendarSelectedWindowSelector);

  // form state
  const [date, setDate] = useState(selectedDate || new Date());
  const [start, setStart] = useState(
    selectedWindow
      ? getStepAfterDate(selectedWindow.start)
      : CALENDAR_DEFAULT_EVENT_START
  );
  const [end, setEnd] = useState(
    selectedWindow
      ? getStepAfterDate(selectedWindow.end)
      : CALENDAR_DEFAULT_EVENT_START + CALENDAR_DEFAULT_EVENT_LENGTH
  );
  const [roomId, setRoomId] = useState(
    selectedWindow ? selectedWindow.roomId : null
  );
  const [errors, setErrors] = useState([]);

  // validate form whenever a field changes
  useEffect(() => {
    const errors = [];
    const startDate = getDateWithStep(date, start);
    const endDate = getDateWithStep(date, end);

    // make sure [end] comes after [start]
    if (start > end) {
      errors.push("End Time must be greater than Start Time");
    }

    // make sure event doesnt overlap with an existing event
    for (let i = 0; i < events ? events.length : 0; i++) {
      const event = events[i];

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
  }, [events, date, start, end, roomId]);

  const onSubmit = (e) => {
    e.preventDefault();

    // add the event to the store and navigate back to calendar view
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
            options={
              rooms
                ? Object.values(rooms).map(({ name, id }) => ({
                    value: id,
                    label: name,
                  }))
                : []
            }
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
