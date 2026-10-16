// Illustrative pseudocode only; no persistence schema or room identifiers.
export function canRestoreSeat(saved, currentRoom) {
  if (!saved || saved.roomCode !== currentRoom.code) return false;
  if (currentRoom.phase === 'GAME_OVER') return false;
  return currentRoom.seats.includes(saved.seatId);
}
