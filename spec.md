# LearnVerse

## Current State
LearnVerse is a comprehensive educational platform (Sürüm 34) with quiz, games, stories, poems, experiments, puzzles, geography, history, science, English, coding, and many pedagogical features. The parent/teacher panel (ParentPage.tsx) shows student stats, topic performance graphs, and class management. There is one-way parent→student messaging. The ClassesPage.tsx has class groups and assignments. There is no printable/exportable report and no teacher→parent messaging.

## Requested Changes (Diff)

### Add
- **İlerleme Raporu (Progress Report)**: A printable/export-ready progress report for parents and teachers. In ParentPage.tsx, add a "Raporu Yazdır" (Print Report) button that opens a print-friendly summary of the student's stats: badge level, total points, streak, quiz history, topic performance breakdown, completed content sections, and recent activity. Uses browser `window.print()` with a print-specific CSS layout.
- **İki Yönlü Mesajlaşma (Two-Way Messaging)**: Currently only parent→student messaging exists. Add teacher→parent messaging:
  - In ClassesPage.tsx (teacher panel), add a "Mesajlaşma" tab where teacher can select a student by student number and send a message to the parent.
  - In ParentPage.tsx, add a "Öğretmen Mesajları" (Teacher Messages) tab/section where parents can see messages from teachers and reply back.
  - Messages stored in localStorage under `learnverse_teacher_msgs_{studentNumber}` as an array of `{id, from, fromRole, message, date, read}` objects.

### Modify
- ParentPage.tsx: Add print report button and teacher message inbox section
- ClassesPage.tsx: Add teacher→parent messaging tab

### Remove
- Nothing removed

## Implementation Plan
1. Add message types/storage helpers to store.ts (teacherMessages: save, get, markRead functions)
2. Modify ParentPage.tsx: add "Raporu Yazdır" button with print-friendly hidden div that gets printed, and teacher messages inbox section
3. Modify ClassesPage.tsx: add messaging tab for teacher to send messages to parent of a student
4. Add print CSS in index.css or inline styles for the report
