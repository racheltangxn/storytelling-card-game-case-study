# 02 — Product problem

Image-based storytelling games are easy to explain but surprisingly difficult to digitize well. A digital version has to preserve ambiguity, social timing, and delight without making the rules or the current turn hard to understand.

## Design questions

1. How can the same round structure support local, synchronous remote, and asynchronous play?
2. How should the interface recover when a player refreshes or temporarily disconnects?
3. Which actions belong to the host, the active player, or every seated player?
4. How can the product remain playable without credentials or a backend during development?

The resulting design used one explicit game state, guarded actions, and separate local and remote synchronization adapters.
