import React from "react";

/**
 * @param {Object} roomsMap map of room id to room
 *
 * @returns a react-big-calendar custom resource header
 *
 * react-big-calendar passes the resource header a label that we have set to be the room's id.
 * We can then get the full room object by looking it up in [roomsMap].
 */
export const getCOVResourceHeader = (roomsMap) => ({ label: roomId }) => {
  const room = roomsMap[roomId];
  if (!room) {
    return null;
  }

  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div>{room.name}</div>
      <img src={room.imageUrl} alt="idk sorry" className="w-16 h-16" />
    </div>
  );
};
