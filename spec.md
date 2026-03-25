# LearnVerse

## Current State
A comprehensive gamified educational platform with 3 user levels (preschool, primary, middle school), quizzes, stories, poems, experiments, games, vocabulary, geography, history, science, coding, art, and more. Features include spaced repetition, flashcards, spelling practice, topic-based quizzes, leaderboard, daily streak, badges, parent/teacher panels, class assignments, and exportable reports. UI is in 10 languages; English content translation is complete for all sections.

## Requested Changes (Diff)

### Add
1. **Seviye Yerleştirme Testi (PlacementTestPage)** -- When a new student profile is created and `level` is not yet set (or is set to `ilkokul` as default), show a 10-question adaptive placement quiz that auto-determines whether the student belongs to `okul_oncesi`, `ilkokul`, or `ortaokul`. Results stored in localStorage. After test, redirect to home. Test is only shown once (tracked in localStorage by studentNumber + `placementDone` flag).
2. **Günlük Görev Sistemi (Daily Goals Card)** -- On HomePage, show a "Today's Goals" card with 3 tasks: read 1 story, do 1 quiz, learn 5 vocabulary words. Each task has a progress indicator (done/not done). Track completion via existing `dailyGoals` in localStorage (already partially in store). When all 3 complete, show a bonus +30 points reward notification. Card resets every day.

### Modify
- **LoginPage / profile creation** -- After a new student profile is created, redirect to `/placement-test` instead of `/home` if the placement test hasn't been taken yet.
- **HomePage** -- Add the Daily Goals card near the top, below the "word of the day" cards.
- **App routing (App.tsx or router)** -- Add route for `/placement-test`.

### Remove
- Nothing removed.

## Implementation Plan
1. Create `src/frontend/src/pages/PlacementTestPage.tsx` with 10 questions spanning topics appropriate for all 3 levels. Scoring: 0-3 correct → okul_oncesi, 4-6 → ilkokul, 7-10 → ortaokul. After completion, save level to the student profile in localStorage and mark `placementDone: true`. Show result screen then navigate to home.
2. Add helper in `store.ts` for `hasPlacementDone(studentNumber)` and `setPlacementDone(studentNumber, level)`.
3. Add route `/placement-test` in the router (check App.tsx or routes file).
4. Modify login flow so that after new profile creation (or first login), if `!hasPlacementDone()`, navigate to `/placement-test`.
5. Enhance the Daily Goals card in HomePage using the existing `dailyGoals` tracking in store, showing read story / quiz done / vocabulary words learned with checkmarks.
6. When all 3 daily goals complete, award +30 bonus points (only once per day, track with `dailyGoalsBonusGiven` flag in localStorage).
