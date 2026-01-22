# Nipponverb 🇯🇵 (v1.0.1) - Japanese Learning Platform

![Deploy Status](https://github.com/vecear/Nipponverb/actions/workflows/firebase-hosting-merge.yml/badge.svg)
[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://nipponverb.web.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A premium, interactive Japanese learning web application powered by authentic corpus data (JDD, CEJC).

## Features

- **Authentic Content**: Questions derived from real Japanese corpus data
- **Multiple Learning Modes**:
  - Basic Practice (Verbs, Kanji, Grammar)
  - JLPT Simulation (Mock Exams)
  - Scenario Stages (Real-world conversations)
- **Progress Tracking**: Comprehensive statistics and achievement system
- **Premium UI**: Glassmorphism design with smooth animations
- **Firebase Integration**: Real-time data sync and authentication

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Backend**: Firebase (Auth + Firestore)
- **Router**: React Router v6

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Firebase account

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Nipponverb
```

1. Install dependencies:

```bash
npm install
```

1. Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

1. Add your Firebase configuration to `.env`:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

1. Start the development server:

```bash
npm run dev
```

1. Open [http://localhost:5173](http://localhost:5173) in your browser

## Firebase Setup

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Google Analytics (optional)

### 2. Enable Authentication

1. Go to Authentication > Sign-in method
2. Enable Google provider
3. Enable Email/Password provider

### 3. Create Firestore Database

1. Go to Firestore Database
2. Create database (start in production mode)
3. Set up security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    match /drills/{category}/{level}/{questionId} {
      allow read: if request.auth != null;
    }

    match /exams/{examId}/{document=**} {
      allow read: if request.auth != null;
    }

    match /stages/{stageId}/{document=**} {
      allow read: if request.auth != null;
    }
  }
}
```

### 4. Get Firebase Config

1. Go to Project Settings > General
2. Scroll to "Your apps"
3. Click the web icon (</>)
4. Register your app
5. Copy the config values to your `.env` file

## Database Schema

```
/users/{userId}
  - displayName: string
  - email: string
  - photoURL: string
  - currentLevel: "N5" | "N4" | "N3" | "N2" | "N1"
  - stats: {
      verbs: { accuracy: number, learned: number },
      kanji: { accuracy: number, learned: number },
      grammar: { accuracy: number, learned: number },
      stages_cleared: string[]
    }

/drills/{category}/{level}/{questionId}
  - stem: string
  - correct: string
  - options: string[]
  - explanation: string
  - source: string (optional)

/exams/{examId}
  - level: string
  - sections: array
  - questions: array

/stages/{stageId}
  - title: string
  - dialogue: array
  - questions: array
```

## Data Pipeline

To populate the database with authentic Japanese content, you'll need to:

1. Process corpus data (JDD, CEJC) using Python scripts
2. Generate questions with tricky distractors
3. Upload to Firestore using Firebase Admin SDK

See [implementation_plan.md](./implementation_plan.md) for detailed data engineering strategy.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/        # Reusable UI components
├── config/           # Firebase configuration
├── contexts/         # React contexts (Auth)
├── hooks/            # Custom React hooks
├── pages/            # Page components
├── services/         # API and database services
├── store/            # Zustand stores
├── types/            # TypeScript type definitions
├── App.tsx           # Main app component
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## Design Philosophys

- **Premium Feel**: Glassmorphism effects, smooth animations, gradient accents
- **Authentic Content**: Real corpus data instead of textbook sentences
- **Gamification**: Progress tracking, achievements, streaks
- **Mobile-First**: Responsive design for all devices

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details
