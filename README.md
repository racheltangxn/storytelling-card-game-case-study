# Storytelling Card-Game Prototype — Case Study

An engineering case study for an independent image-based storytelling game prototype.

> A multiplayer product experiment about preserving ambiguity, social timing, and clarity across local, synchronous, and asynchronous play.

## At a glance

| Area | Focus |
| --- | --- |
| Product | Image-based storytelling across three play contexts |
| Engineering | Explicit state transitions, guarded actions, adapter-based sync |
| Verification | Focused tests for scoring, permissions, rejoin, and recovery |
| Public artifact | Non-runnable case study with original placeholder visuals |

This repository is intentionally non-runnable. It documents the product thinking, system design, multiplayer state model, and verification approach without publishing the private prototype's deck, artwork, prompts, deployment configuration, or production code.

## Contents

1. [Overview](case-study/01-overview.md)
2. [Product problem](case-study/02-product-problem.md)
3. [System architecture](case-study/03-system-architecture.md)
4. [Multiplayer state model](case-study/04-multiplayer-state-model.md)
5. [Safety and data design](case-study/05-safety-and-data-design.md)
6. [Testing and verification](case-study/06-testing-and-verification.md)
7. [Lessons learned](case-study/07-lessons-learned.md)

## Recommended review path

Start with the [overview](case-study/01-overview.md), then read the [architecture](case-study/03-system-architecture.md) and [state model](case-study/04-multiplayer-state-model.md). The [testing](case-study/06-testing-and-verification.md) and [lessons learned](case-study/07-lessons-learned.md) pages show how the prototype was evaluated.

The full prototype remains private. This public case study is independent and is not affiliated with or endorsed by Libellud, Asmodee, or any commercial game publisher.

## Public-artifact policy

The repository contains only newly created placeholder artwork, diagrams, pseudocode, and explanatory writing. It does not contain the private prototype's card images, image-generation prompts, deck data, credentials, deployment files, or complete game implementation.

## Status

Public engineering case study; not a playable release.

See [NOTICE.md](NOTICE.md) for reuse terms.
