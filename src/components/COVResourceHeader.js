import React from "react";

/**
 * A Factory for react-big-calendar custom header components
 * 
 * react-big-calendar passes the header a label that we have set to be the room's id.
 * We can then get the full room object by looking it up in [rooms].
 * 
 * @param {Object} rooms map of room id to room
 *
 * @returns a react-big-calendar custom resource header
 */
export const getCOVResourceHeader = (rooms) => ({ label: roomId }) => {
  const room = rooms[roomId];
  
  if (!room) {
    return null;
  }

  return (
    <div className="flex items-center px-4 py-2 justify-between">
      <div>{room.name}</div>
      <img src={room.imageUrl} alt="idk sorry" className="w-16 h-16" />
    </div>
  );
};
