# Quick Start Guide

Get Nipponverb running on your local machine in under 10 minutes.

## Prerequisites Checklist

- [ ] Node.js 18+ installed ([Download](https://nodejs.org/))
- [ ] npm or yarn package manager
- [ ] Git installed
- [ ] A Google account (for Firebase)

## Step-by-Step Setup

### 1. Install Dependencies (2 min)

```bash
npm install
```

### 2. Set Up Firebase (5 min)

#### A. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name (e.g., "nipponverb")
4. Disable Google Analytics (optional for now)
5. Click "Create project"

#### B. Enable Authentication

1. In Firebase Console, go to **Authentication** → **Get started**
2. Click **Sign-in method** tab
3. Enable **Google** provider:
   - Click "Google"
   - Toggle "Enable"
   - Select project support email
   - Save
4. Enable **Email/Password** provider:
   - Click "Email/Password"
   - Toggle "Enable"
   - Save

#### C. Create Firestore Database

1. Go to **Firestore Database** → **Create database**
2. Select **Start in production mode**
3. Choose a location (closest to your users)
4. Click "Enable"

#### D. Get Firebase Config

1. Go to **Project Settings** (gear icon) → **General**
2. Scroll to "Your apps" section
3. Click the **</>** (Web) icon
4. Register app with nickname (e.g., "Nipponverb Web")
5. **Copy the configuration values**

### 3. Configure Environment (1 min)

Create `.env` file in project root:

```bash
cp .env.example .env
```

Edit `.env` and paste your Firebase config:

```env
VITE_FIREBASE_API_KEY=AIzaSy...
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123
```

### 4. Deploy Firestore Rules (1 min)

```bash
# Install Firebase CLI if not already installed
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in project
firebase init firestore
# Select: Use an existing project
# Choose your project
# Accept default filenames (firestore.rules, firestore.indexes.json)

# Deploy security rules
firebase deploy --only firestore:rules
```

### 5. Seed Sample Data (Optional - 2 min)

If you want to test with sample questions:

```bash
cd scripts
pip install -r requirements.txt

# Download service account key from Firebase Console:
# Project Settings → Service accounts → Generate new private key
# Save as serviceAccountKey.json in scripts/ folder

python seed_data.py
cd ..
```

### 6. Start Development Server (1 min)

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## First Login

1. Click "Continue with Google" or use Email/Password
2. Sign in with your Google account
3. You'll be redirected to the dashboard

## Verify Setup

✅ You should see:
- Dashboard with welcome message
- Your profile picture in navbar
- Stats cards (may show 0% initially)
- Three mode cards (Basic Training, JLPT Simulation, Stages)

## Troubleshooting

### "Firebase: Error (auth/...)"
- Check that authentication providers are enabled in Firebase Console
- Verify `.env` file has correct Firebase config
- Make sure you're using the Web App config (not iOS/Android)

### "Missing or insufficient permissions"
- Deploy Firestore rules: `firebase deploy --only firestore:rules`
- Check rules in Firebase Console → Firestore → Rules

### "Cannot find module..."
- Run `npm install` again
- Delete `node_modules` and `package-lock.json`, then `npm install`

### Port 5173 already in use
```bash
# Use a different port
npm run dev -- --port 3000
```

### Page is blank
- Check browser console for errors (F12)
- Verify all environment variables are set
- Make sure Firebase project is active

## Next Steps

- **Add Questions**: See [scripts/README.md](scripts/README.md) for data seeding
- **Customize**: Modify colors in [tailwind.config.js](tailwind.config.js)
- **Deploy**: Follow [DEPLOYMENT.md](DEPLOYMENT.md) to go live

## Useful Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Linting
npm run lint         # Check code quality

# Firebase
firebase deploy      # Deploy to hosting
firebase serve       # Test locally with Firebase
```

## Getting Help

- 📖 Full docs: [README.md](README.md)
- 🚀 Deployment: [DEPLOYMENT.md](DEPLOYMENT.md)
- 🤝 Contributing: [CONTRIBUTING.md](CONTRIBUTING.md)
- 📋 Project overview: [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)

---

**Total Setup Time**: ~10 minutes

**Status**: Ready to develop! 🎉
