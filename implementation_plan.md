# Japanese Learning Platform Implementation Plan

This document outlines the architecture, data strategy, and feature roadmap for a premium, interactive Japanese learning web application.

## 1. Technology Stack & Architecture

### **Frontend (Client)**

* **Framework**: React (v18+) with TypeScript.
* **Build Tool**: Vite (for fast HMR and optimized builds).
* **Styling**: Tailwind CSS (for layout system) + Custom CSS for glassmorphism/gradients.
* **Animations**: Framer Motion (crucial for the requested "dynamic" and "premium" feel).
* **State Management**: Zustand (lightweight global state for user progress).
* **Router**: React Router v6.

### **Backend (Serverless)**

* **Platform**: Firebase.
* **Authentication**: Firebase Auth (Google Provider + Email/Password).
* **Database**: Cloud Firestore (NoSQL).
* **Hosting**: Firebase Hosting.
* **Functions**: Cloud Functions (optional, for complex score calculation or data generation triggers).

---

## 2. Data Engineering & Content Strategy

The core value of this app lies in using authentic corpora (JDD, CEJC) rather than generic textbook sentences.

### **Data Source Processing (ETL Pipeline)**

You will need a set of Python scripts to pre-process these datasets before uploading to Firestore.

#### **A. Basic Practice - Verbs (Sources: CEJC, JDD)**

* **Goal**: Real-world verb conjugation practice.
* **Process**:
    1. **Ingest**: Parse CEJC (XML) and JDD (JSON).
    2. **Filter**: Extract words tagged as "Verb" (動詞).
    3. **Context**: Keep the surrounding sentence for context questions.
    4. **Generation**: creating "Tricky Options" logic:
        * *Correct*: 食べられる (Potential/Passive)
        * *Distractor 1*: 食べれる (Common error/Ra-nuki)
        * *Distractor 2*: 食べらせる (Incorrect Causative mix)
        * *Distractor 3*: 食べあれる (Nonsense)
    5. **Output**: `verbs.json` -> Upload to Firestore `questions/verbs`.

#### **B. Basic Practice - Kanji (Source: JmdictFurigana)**

* **Proces**: Use JmdictFurigana to map Kanji $\leftrightarrow$ Furigana.
* **Question Types**:
  * Given Kanji, select Reading (Hiragana).
  * Given Reading, select Kanji.
  * *Tricky Logic*: Distractors should share similar radicals or sounds (e.g., for "Kou", offer contextually wrong Kanji like 校 vs 考).

#### **C. Basic Practice - Grammar (Source: Open Source JLPT Resources)**

* **Source**: Community maintained JLPT grammar lists (e.g., rigid lists from GitHub repositories).
* **Process**: Tag by JLPT Level (N5-N1).
* **Format**: Fill-in-the-blank sentences.

#### **D. Stages / Comprehensive Practice (Source: JDD, CEJC)**

* **Format**: "Real Conversation" Analysis.
* **Content**: Present a 4-8 line dialogue from JDD (Topic: Travel, School, etc.).
* **Question**: "Why did Speaker A refuse the invitation?" (Requires understanding context/nuance).

---

## 3. Database Schema (Firestore)

```text
/users/{userId}
  - displayName: string
  - email: string
  - photoURL: string (from Google)
  - currentLevel: number (User JLPT target)
  - stats: {
      verbs: { accuracy: 85, learned: 120 },
      kanji: { accuracy: 92, learned: 500 },
      stages_cleared: [ "travel_01", "school_03" ]
    }

/drills/{category}  (Categories: verbs, grammar, kanji)
  - /n5/
    - {questionId}: {
        stem: "明日、学校へ___。",
        correct: "行きます",
        options: ["行きます", "行くい", "行った", "行いて"],
        explanation: "Polite non-past form required...",
        source: "JDD_Corpus_ID_123"
      }

/exams/{examId} (JLPT Mock)
  - level: "N3"
  - sections: [
      {
         type: "vocab",
         questions: [ ...embedded or references... ]
      }
    ]

/stages/{stageId} (Comprehensive)
  - title: "At the Station"
  - dialogue: [
      { speaker: "A", text: "..." },
      { speaker: "B", text: "..." }
    ]
  - questions: [ ... ]
```

---

## 4. Feature Breakdown & UI Plan

### **A. Authentication & Profile**

* **Login Page**:
  * Glassmorphism card centered on a dynamic background (e.g., floating slow-moving Japanese particles or cherry blossoms).
  * "Sign in with Google" button (primary).
  * Email/Password fallback.
* **Profile Settings**:
  * **Avatar**: Automatically pull `user.photoURL` from Firebase Auth.
  * **Edit Fields**: Name, Target JLPT Level (N5-N1).
  * **Visuals**: A "Passport" style card showing the user's avatar and stats.

### **B. Main Dashboard (Home)**

* **Hero Section**: "Welcome back, {Name}".
* **Daily Stats**: Circular progress rings for "Verbs", "Grammar", "Kanji".
* **Quick Start**: Large, visually distinct cards for the 3 main modes:
    1. **Basic Training** (Foundations)
    2. **Simulation** (Mock Exams)
    3. **Stages** (Scenario Mode)

### **C. Practice Mode (The "Arena")**

* **Interface**:
  * Question centered with large typography.
  * Four choice buttons arranged in a grid or stack.
  * **Feedback**:
    * *Correct*: Green flash + "Ping" sound + subtle confetti.
    * *Incorrect*: Red shake + Explanation slides up from bottom.
* **Logic**:
  * Randomized ordering of options.
  * "Tricky" logic: Ensure options are grammatically plausible but semantically wrong, or vice versa (generated in Data Phase).

### **D. JLPT Simulation Mode**

* **Timer**: Strict countdown based on level (e.g., N1 = 170 min).
* **No Immediate Feedback**: Mimic real exam—score revealed only at the end.
* **Result Page**: Radar chart showing strengths/weaknesses (Vocab vs Grammar vs Listening).

### **E. Stages (Scenario Mode)**

* **Flow**:
  * **Intro**: "Scene: Buying a Ticket".
  * **Dialogue**: Read the conversation (Audio playback if available from corpus, otherwise Text-to-Speech).
  * **Challenge**: Checkpoint questions.
  * **Reward**: Clear the stage -> Unlock next scenario.

---

## 5. Visual Aesthetics (Premium Feel)

* **Color Palette**:
  * *Primary*: Deep Indigo (Nihon-no-iro: Kon-ai) for credibility.
  * *Accent*: Vibrant Sakura Pink or Electric Cyan for interactive elements.
  * *Background*: Dark mode by default or "Paper" texture with subtle noise.
* **Typography**:
  * Google Fonts: `Noto Sans JP` (for readability) mixed with `Zen Maru Gothic` (for a softer, modern feel).
* **Micro-interactions**:
  * Hovering over a card "lifts" it (scale + shadow).
  * Page transitions: Soft fade-in / slide-up (using Framer Motion).

## 6. Implementation Steps (Roadmap)

1. **Setup**: Initialize React + Vite + Firebase project.
2. **Auth**: Implement Google Login and User Context.
3. **Data Scripts**: Write Python scripts to parse JDD/CEJC and generate the JSON seed files.
4. **Core UI**: Build the `Layout`, `Navbar`, and `QuestionCard` components.
5. **Drill Engine**: Implement the logic for fetching questions and checking answers.
6. **Gamification**: Add scoring and profile stats.
7. **Deployment**: Deploy to Firebase Hosting.
