# 05 — Safety and data design

The private prototype treated the backend as an untrusted boundary.

- Demo mode used local session state and no credentials.
- Player photos were constrained to data-image inputs with size limits.
- Access codes were normalized and bounded before lookup.
- Rejoin state was checked against the current room, seat list, and game phase.
- Production deployment would require authenticated room membership and least-privilege database rules.

No credentials, room data, captured content, production rules, or deployment identifiers are included in this repository.
