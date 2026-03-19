# LearnVerse - Multilingual Content Round 2 (English Translations)

## Current State
- UI/navigation fully translated into 10 languages via translations.ts
- Education content (quiz questions, proverbs, grammar, vocabulary) only exists in Turkish
- translations.ts (~85KB) and questions.ts (~70KB) are already at size limits - cannot add to them
- ProverbsPage, GrammarPage, VocabularyPage have content hardcoded in Turkish inside the component

## Requested Changes (Diff)

### Add
- New file: `src/frontend/src/i18n/content-translations.ts` — small file with English translations for proverbs, grammar cards, and vocabulary words (as a record keyed by item key)
- New file: `src/frontend/src/data/questions-en.ts` — English quiz questions for all three levels (preschool, primary, middle school) — 5 questions per level (15 total, kept small)

### Modify
- `ProverbsPage.tsx` — when `lang !== 'tr'`, overlay English title/meaning from content-translations.ts (fallback to Turkish if translation missing)
- `GrammarPage.tsx` — same pattern: use English rule/example when lang is 'en', fallback to Turkish
- `VocabularyPage.tsx` — same: show English definition/example/synonym/antonym when lang is 'en'
- `QuizPage.tsx` + `src/frontend/src/data/questions.ts` helper — when lang is 'en', pull from questions-en.ts instead of Turkish questions.ts

### Remove
- Nothing removed

## Implementation Plan
1. Create `src/frontend/src/i18n/content-translations.ts` with English translations keyed by item key (proverbs, grammar, vocabulary)
2. Create `src/frontend/src/data/questions-en.ts` with 5 English questions per level
3. Update ProverbsPage to show translated content when lang === 'en'
4. Update GrammarPage to show translated content when lang === 'en'
5. Update VocabularyPage to show translated content when lang === 'en'
6. Update QuizPage to use English questions when lang === 'en'
7. Validate (lint + build)

NOTE: Only English (en) is added in this round to avoid build failures. Other 8 languages will follow in subsequent rounds.
