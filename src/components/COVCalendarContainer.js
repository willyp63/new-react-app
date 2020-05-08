import React, { useState, useEffect } from "react";
import COVCalendar from "./COVCalendar";

const eventsUrl = "http://localhost:8080/events.json";

/**
 * Container for fetching and managing events and rooms.
 */
const COVCalendarContainer = () => {
  const [events, setEvents] = useState(null);
  const [rooms, setRooms] = useState(null);
  const [roomsMap, setRoomsMap] = useState(null);

  useEffect(() => {
    fetch(eventsUrl)
      .then((response) => response.json())
      .then((data) => {
        // convert events to a format that react-big-calendar likes
        const newEvents = data.map((event) => ({
          ...event,
          start: new Date(event.start),
          end: new Date(event.end),
          roomId: event.room.id,
          room: null,
        }));

        // create a map of room id to room
        const newRoomsMap = {};
        data.forEach((event) => {
          if (!newRoomsMap[event.room.id]) {
            newRoomsMap[event.room.id] = event.room;
          }
        });

        // all the rooms with events
        const newRooms = Object.values(newRoomsMap);

        setEvents(newEvents);
        setRooms(newRooms);
        setRoomsMap(newRoomsMap);
      });
  }, []);

  return <COVCalendar events={events} rooms={rooms} roomsMap={roomsMap} />;
};

export default COVCalendarContainer;
