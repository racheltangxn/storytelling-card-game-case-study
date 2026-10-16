# 06 — Testing and verification

The private prototype used focused tests for the parts most likely to fail under multiplayer pressure:

- scoring and round progression
- phase and permission guards
- duplicate-card prevention
- refresh and rejoin recovery
- notification eligibility
- access-code normalization
- special game variants and end-game transitions

The public repository does not reproduce the private test suite. It records the verification strategy without exposing the implementation or complete rule set.
