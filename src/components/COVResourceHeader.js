import React from "react";

/**
 * @param {Object} roomsMap map of room id to room
 * @param {boolean} showImage wether to show the rooms image or not
 *
 * @returns a react-big-calendar custom resource header
 *
 * react-big-calendar passes the resource header a label that we have set to be the room's id.
 * We can then get the full room object by looking it up in [roomsMap].
 */
export const getCOVResourceHeader = ({ roomsMap, showImage = true }) => ({
  label: roomId,
}) => {
  const room = roomsMap[roomId];
  if (!room) {
    return null;
  }

  return (
    <div
      className={
        "flex items-center px-4 py-2 " +
        (showImage ? "justify-between" : "justify-center")
      }
    >
      <div>{room.name}</div>
      {showImage ? (
        <img src={room.imageUrl} alt="idk sorry" className="w-16 h-16" />
      ) : null}
    </div>
  );
};
