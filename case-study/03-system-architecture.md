# 03 — System architecture

The prototype separated game rules from transport and presentation.

```text
UI screens
    │ dispatches actions
Game context
    │ validates transitions
Pure reducer + scoring
    │ reads/writes through an adapter
Local session adapter   Remote room adapter
```

This separation made the demo mode useful for rapid iteration while keeping the rules testable without a browser or live backend.

See [system-architecture.svg](../diagrams/system-architecture.svg) for a compact visual version.
