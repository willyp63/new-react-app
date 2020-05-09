import React from "react";
import { withRouter } from "react-router-dom";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";

import { getCOVResourceHeader } from "./COVResourceHeader";
import { CALENDAR_STEP_SIZE } from "../constants/calendarConstants";
import { eventsSelector } from "../store/reducers/eventsReducer";
import { roomsSelector } from "../store/reducers/roomsReducer";
import { calendarSelectedDateSelector } from "../store/reducers/calendarReducer";
import {
  selectCalendarDate,
  selectCalendarWindow,
} from "../store/actions/calendarActions";

const localizer = momentLocalizer(moment);

/**
 * Displays events on an interactable calendar
 *
 * Uses react-big-calendar for the heavy lifting
 *
 * The calendar is split up into columns, one for each room. And each event is shown under
 * the column of the room it is in.
 */
const COVCalendar = ({ history }) => {
  const dispatch = useDispatch();

  const events = useSelector(eventsSelector);
  const rooms = useSelector(roomsSelector);
  const selectedDate = useSelector(calendarSelectedDateSelector);

  if (!events || !rooms) {
    return null;
  }

  const onDateSelect = (date) => dispatch(selectCalendarDate(date));

  const onWindowSelect = ({ start, end, resourceId }) => {
    dispatch(selectCalendarWindow({ start, end, roomId: resourceId }));
    // timeout is required so that a state update is not made on this component after it dismounts
    setTimeout(() => history.push("/new"), 0);
  };

  return (
    <div className="flex flex-col h-screen px-16 py-8">
      <div className="mb-2">
        <DatePicker selected={selectedDate} onChange={onDateSelect} />
      </div>
      <div className="flex-1 min-h-0">
        <Calendar
          selectable
          localizer={localizer}
          events={events}
          resources={Object.values(rooms)}
          resourceAccessor="roomId"
          resourceIdAccessor="id"
          // this causes the room's id to be passed to the resource header component instead of its name
          resourceTitleAccessor="id"
          views={["day"]}
          defaultView={Views.DAY}
          step={CALENDAR_STEP_SIZE}
          date={selectedDate}
          onNavigate={onDateSelect}
          onSelectSlot={onWindowSelect}
          // render a custom resource header with the room's name and image
          components={{
            resourceHeader: getCOVResourceHeader(rooms),
          }}
          // subtract one millisecond from the end date putting midnight dates at 11:59:999
          // this is to get around an issue were events ending at midnight are considered all-day events
          // and do not show up on the calendar
          endAccessor={({ end }) => new Date(end.getTime() - 1)}
        />
      </div>
    </div>
  );
};

export default withRouter(COVCalendar);
