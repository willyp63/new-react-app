import React, { useState, useEffect } from "react";
import COVDateTimePicker from "./COVDateTimePicker";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { calendarSelector } from "../store/calendarReducer";
import { fetchEvents, addEvent } from "../store/calendarActions";
import { roundDateToNearestQuarterHour } from "../utils/dateUtils";
import { randomId } from "../utils/idUtils";

const COVEventForm = ({ history }) => {
  const dispatch = useDispatch();
  const calendarData = useSelector(calendarSelector);

  // default start to closest quarter hour and end to 1 hour after that
  const initialStart = roundDateToNearestQuarterHour(new Date());
  const initialEnd = new Date(initialStart);
  initialEnd.setHours(initialEnd.getHours() + 1);

  // values of form inputs
  const [start, setStart] = useState(initialStart);
  const [end, setEnd] = useState(initialEnd);
  const [roomId, setRoomId] = useState(null);

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

  if (!calendarData) {
    return null; // TODO: loading ui
  }

  const onRoomSelected = ({ target: { value: roomId } }) => {
    setRoomId(roomId);
  };

  const onSubmit = (e) => {
    // add the event to the store and navigate back to calendar view
    e.preventDefault();
    dispatch(addEvent({ id: randomId(), start, end, roomId }));
    history.push('/');
  };

  return (
    <form>
      <div className="mb-8">
        <COVDateTimePicker
          label="Start:"
          initialValue={start}
          onDateTimeChange={setStart}
        />
      </div>
      <div className="mb-8">
        <COVDateTimePicker
          label="End:"
          initialValue={end}
          onDateTimeChange={setEnd}
        />
      </div>
      <div className="mb-8">
        <label className="mr-4">Room:</label>
        <select onChange={onRoomSelected} className="cov-select ml-4">
          {calendarData.rooms.map(({ name, id }) => (
            <option value={id} key={id}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-end">
        <Link to="/" className="cov-btn mr-4">
          Cancel
        </Link>
        <button type="submit" className="cov-btn" onClick={onSubmit}>
          Save!
        </button>
      </div>
    </form>
  );
};

export default withRouter(COVEventForm);
