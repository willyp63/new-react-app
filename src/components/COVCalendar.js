import React from "react";
import PropTypes from "prop-types";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { getCOVResourceHeader } from "./COVResourceHeader";

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
  if (!events || !rooms || !roomsMap) {
    return null; // TODO: loading ui
  }

  return (
    <Calendar
      localizer={localizer}
      events={events}
      resources={rooms}
      resourceAccessor="roomId"
      resourceIdAccessor="id"
      resourceTitleAccessor="id" // this causes the room's id to be passed to the resource header component instead of its name
      views={["day"]}
      defaultView={Views.DAY}
      step={30}
      components={{
        resourceHeader: getCOVResourceHeader(roomsMap), // render a custom resource header with the room's name and image
      }}
    />
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
