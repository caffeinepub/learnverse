# LearnVerse

## Current State
LearnVerse is a gamified educational platform for children with these existing content sections:
- Quiz, Games (4 mini-games), Culture, Stories, Poems, Experiments, Puzzles, Turkey Map, Art & Music
- Features: progress tracking, daily goals, streak, leaderboard, TTS, noise meter, search/filter, profile summary
- Data stored in localStorage with backend sync. Progress tracked via `markTopicRead` / `getReadTopics` in store.ts.
- Routes defined in App.tsx, section cards in HomePage sections array.

## Requested Changes (Diff)

### Add
1. **Atasözleri & Deyimler page** (`/proverbs`) - ProverbsPage.tsx
   - 3-level content (okul_oncesi, ilkokul, ortaokul) with proverbs and idioms
   - Each card: Turkish proverb/idiom + explanation + example usage
   - Progress tracking, search, TTS, +10 points on mark-read

2. **Dilbilgisi Kartları page** (`/grammar`) - GrammarPage.tsx
   - 3-level content: preschool (letters/syllables), primary (verb conjugation, punctuation), middle (tenses, sentence structure)
   - Each card: rule + example + visual aid emoji
   - Progress tracking, search, +10 points on mark-learned

3. **Kelime Haznesi page** (`/vocabulary`) - VocabularyPage.tsx
   - 3-level word cards with synonyms, antonyms, example sentences
   - Daily new words highlighted
   - Progress tracking, search, +10 points per word learned

4. **Matematik Alıştırmaları page** (`/math-practice`) - MathPracticePage.tsx
   - Interactive problem cards (preschool: counting, primary: four operations, middle: fractions/percentages)
   - User taps answer options (multiple choice), instant feedback
   - Progress tracking, +15 points per correct answer

5. **Beden Eğitimi & Sağlık page** (`/health`) - HealthPage.tsx
   - Exercise cards, nutrition info, hygiene tips per level
   - Each card: activity/tip + description + emoji illustration
   - Progress tracking, search, +10 points on mark-done

### Modify
- **App.tsx**: Add 5 new routes
- **HomePage.tsx**: Add 5 new section cards to the grid

### Remove
- Nothing removed

## Implementation Plan
1. Create ProverbsPage.tsx with 3-level content (8+ items per level), progress bar, search, TTS, mark-read
2. Create GrammarPage.tsx with 3-level grammar cards, progress bar, search, mark-learned
3. Create VocabularyPage.tsx with 3-level vocabulary cards, synonyms/antonyms, progress bar, search, mark-learned
4. Create MathPracticePage.tsx with interactive multiple-choice problems per level, points for correct answers
5. Create HealthPage.tsx with exercise/nutrition/hygiene cards, progress bar, search, mark-done
6. Update App.tsx to register 5 new routes
7. Update HomePage.tsx to add 5 new section cards
