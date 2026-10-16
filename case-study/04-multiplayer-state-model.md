# 04 — Multiplayer state model

The game was modeled as a small set of explicit phases:

```text
LOBBY → CLUE → SUBMIT → VOTE → REVEAL → NEXT_ROUND
                              └──────→ GAME_OVER
```

Each action was checked against the current phase, actor, seat, and game status before changing state. This prevented double submissions, voting for one's own card, invalid host actions, and stale refreshes from silently corrupting a room.

The public example in `examples/state-transition-example.js` is intentionally incomplete and illustrative only.
