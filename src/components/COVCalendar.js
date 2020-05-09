import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { getCOVResourceHeader } from "./COVResourceHeader";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { calendarSelector } from "../store/calendarReducer";
import { fetchEvents, selectDate, setNewEvent } from "../store/calendarActions";
import { CALENDAR_STEP } from "../constants/calendarConstants";

const localizer = momentLocalizer(moment);

/**
 * Displays events on an interactable calendar
 *
 * using react-big-calendar for the heavy lifting
 *
 * The calendar is split up into columns, one for each room. And each event is shown under
 * the column of the room it is in.
 */
const COVCalendar = ({ history }) => {
  const dispatch = useDispatch();
  const calendarData = useSelector(calendarSelector);

  // fetch calendar data if it is not in the store
  // TODO: duplicate code in COVEventForm.js
  useEffect(() => {
    if (!calendarData) {
      dispatch(fetchEvents());
    }
  }, [calendarData, dispatch]);

  if (!calendarData) {
    return null; // TODO: loading ui
  }

  const setSelectedDate = (date) => dispatch(selectDate(date));

  const onSelectSlot = ({ start, end, resourceId }) => {
    start.setSeconds(0);
    end.setSeconds(0);
    dispatch(setNewEvent({ start, end, roomId: resourceId }));
    setTimeout(() => history.push("/new"), 0);
  };

  return (
    <div className="flex flex-col h-screen px-16 py-8">
      <div className="mb-2">
        <DatePicker
          selected={calendarData.selectedDate}
          onChange={setSelectedDate}
        />
      </div>
      <div className="flex-1 min-h-0">
        <Calendar
          selectable
          localizer={localizer}
          events={calendarData.events}
          resources={calendarData.rooms}
          resourceAccessor="roomId"
          resourceIdAccessor="id"
          onSelectSlot={onSelectSlot}
          // this causes the room's id to be passed to the resource header component instead of its name
          resourceTitleAccessor="id"
          views={["day"]}
          defaultView={Views.DAY}
          step={CALENDAR_STEP}
          date={calendarData.selectedDate}
          onNavigate={setSelectedDate}
          // render a custom resource header with the room's name and image
          components={{
            resourceHeader: getCOVResourceHeader(calendarData.roomsMap),
          }}
        />
      </div>
    </div>
  );
};

const eventType = PropTypes.shape({
  id: PropTypes.string,
  start: PropTypes.instanceOf(Date),
  end: PropTypes.instanceOf(Date),
  roomId: PropTypes.string,
});

const roomType = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
});

COVCalendar.propTypes = {
  /** The list of events to show on the calendar */
  events: PropTypes.arrayOf(eventType),
  /** All of the rooms with events */
  rooms: PropTypes.arrayOf(roomType),
  /** A map of room id to room */
  roomsMap: PropTypes.objectOf(roomType),
};

export default withRouter(COVCalendar);
