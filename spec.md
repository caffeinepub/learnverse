# LearnVerse

## Current State
Surum 45 live. MultiplicationTablePage at /multiplication is latest. ColoringPage exists as Canvas reference for preschoolers.

## Requested Changes (Diff)

### Add
- TracingPage.tsx: Canvas letter/number tracing for preschoolers (ages 4-6)
  - Modes: Letters (A-Z) and Numbers (1-10)
  - Dotted guide outline per item, child traces over it
  - Done button: +5 pts per item, tracked per student
  - Prev/Next nav, Clear button
  - Child-friendly colorful UI, Turkish/English labels
- Route /tracing
- Tracing card in HomePage sections

### Modify
- App.tsx: lazy import + route for TracingPage
- HomePage.tsx: add tracing card

### Remove
- Nothing

## Implementation Plan
1. Create TracingPage.tsx
2. Add route in App.tsx
3. Add card in HomePage.tsx
