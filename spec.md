# LearnVerse

## Current State
LearnVerse is a comprehensive educational platform with 30+ content sections. Sürüm 30 added Spaced Repetition. Math Story Problems (Matematik Hikaye Problemleri) are the next planned feature.

## Requested Changes (Diff)

### Add
- New page `MathStoryPage.tsx` -- story-based math problems for all 3 levels (already created)
- Route `/math-story` in App.tsx
- Home page card for Math Story
- Translation keys `math_story` and `math_story_desc` in all 10 languages in translations.ts
- TranslationKey type entries for `math_story` and `math_story_desc`

### Modify
- `App.tsx`: import MathStoryPage, add mathStoryRoute, add to routeTree
- `HomePage.tsx`: add math story card to sections array
- `translations.ts`: add `math_story` and `math_story_desc` keys to all language blocks

### Remove
Nothing removed.

## Implementation Plan
1. Update translations.ts to add math_story and math_story_desc keys
2. Update App.tsx to add the route
3. Update HomePage.tsx to add the card
4. Validate build
