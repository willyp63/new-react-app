import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { getCOVResourceHeader } from "./COVResourceHeader";
import DatePicker from "react-datepicker";

const localizer = momentLocalizer(moment);

/**
 * Displays events on an interactable calendar
 *
 * using react-big-calendar for the heavy lifting
 *
 * The calendar is split up into columns, one for each room. And each event is shown under
 * the column of the room it is in.
 */
const COVCalendar = ({ events, rooms, roomsMap }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  if (!events || !rooms || !roomsMap) {
    return null; // TODO: loading ui
  }

  return (
    <div className="flex flex-col h-screen px-16 py-8">
      <div className="flex justify-between mb-2">
        <DatePicker selected={selectedDate} onChange={setSelectedDate} />
        <Link to="/new" className="cov-btn">New Event</Link>
      </div>
      <div className="flex-1 min-h-0">
        <Calendar
          localizer={localizer}
          events={events}
          resources={rooms}
          resourceAccessor="roomId"
          resourceIdAccessor="id"
          // this causes the room's id to be passed to the resource header component instead of its name
          resourceTitleAccessor="id"
          views={["day"]}
          defaultView={Views.DAY}
          step={30}
          date={selectedDate}
          onNavigate={setSelectedDate}
          // render a custom resource header with the room's name and image
          components={{
            resourceHeader: getCOVResourceHeader({
              roomsMap,
              showImage: rooms.length <= 5,
            }),
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

export default COVCalendar;
