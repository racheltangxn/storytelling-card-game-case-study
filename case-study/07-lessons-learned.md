# 07 — Lessons learned

## What worked

- A pure reducer made game behavior easier to reason about.
- A local adapter shortened the feedback loop.
- Explicit phase guards turned ambiguous UI failures into testable domain errors.
- Rejoin behavior needed to be designed early rather than added after networking.

## What I would do next

- Define the production authorization model before deploying a shared backend.
- Add observability around room lifecycle and failed actions.
- Run moderated playtests focused on clue quality, pacing, and recovery from interruption.
- Replace prototype assets with artwork whose distribution rights are documented.
