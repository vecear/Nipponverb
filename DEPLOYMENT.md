# Deployment Guide

This guide walks you through deploying Nipponverb to Firebase Hosting.

## Prerequisites

1. Firebase CLI installed globally:
```bash
npm install -g firebase-tools
```

2. Firebase project created (see README.md)

## Step 1: Login to Firebase

```bash
firebase login
```

This will open a browser window for authentication.

## Step 2: Initialize Firebase

```bash
firebase init
```

Select the following options:
- **Hosting**: Configure files for Firebase Hosting
- **Firestore**: Deploy Firestore security rules
- Use an existing project (select your project)
- Public directory: `dist`
- Configure as single-page app: `Yes`
- Set up automatic builds with GitHub: `No`
- Overwrite index.html: `No`

## Step 3: Build the Project

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Step 4: Deploy to Firebase

```bash
firebase deploy
```

Or deploy only hosting:
```bash
firebase deploy --only hosting
```

Or deploy only Firestore rules:
```bash
firebase deploy --only firestore:rules
```

## Step 5: Access Your App

After deployment, Firebase will provide a URL like:
```
https://your-project-id.web.app
```

## Environment Variables

Make sure to set up environment variables in your production environment:

1. Create a `.env.production` file (don't commit this):
```
VITE_FIREBASE_API_KEY=your_production_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_production_auth_domain
VITE_FIREBASE_PROJECT_ID=your_production_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_production_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_production_sender_id
VITE_FIREBASE_APP_ID=your_production_app_id
```

2. Or set environment variables in Firebase Hosting config

## Continuous Deployment (Optional)

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Firebase

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          VITE_FIREBASE_API_KEY: ${{ secrets.VITE_FIREBASE_API_KEY }}
          VITE_FIREBASE_AUTH_DOMAIN: ${{ secrets.VITE_FIREBASE_AUTH_DOMAIN }}
          VITE_FIREBASE_PROJECT_ID: ${{ secrets.VITE_FIREBASE_PROJECT_ID }}
          VITE_FIREBASE_STORAGE_BUCKET: ${{ secrets.VITE_FIREBASE_STORAGE_BUCKET }}
          VITE_FIREBASE_MESSAGING_SENDER_ID: ${{ secrets.VITE_FIREBASE_MESSAGING_SENDER_ID }}
          VITE_FIREBASE_APP_ID: ${{ secrets.VITE_FIREBASE_APP_ID }}

      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: ${{ secrets.GITHUB_TOKEN }}
          firebaseServiceAccount: ${{ secrets.FIREBASE_SERVICE_ACCOUNT }}
          channelId: live
          projectId: ${{ secrets.FIREBASE_PROJECT_ID }}
```

Add secrets to your GitHub repository:
- Settings > Secrets and variables > Actions
- Add all environment variables and Firebase service account

## Domain Setup (Optional)

1. Go to Firebase Console > Hosting
2. Click "Add custom domain"
3. Follow the instructions to verify ownership
4. Update DNS records as instructed

## Performance Optimization

1. **Enable caching**: Firebase Hosting automatically caches static assets

2. **Optimize images**: Use WebP format and compress images

3. **Code splitting**: Vite automatically handles code splitting

4. **CDN**: Firebase Hosting uses a global CDN automatically

## Monitoring

1. **Analytics**: View in Firebase Console > Analytics

2. **Performance**: Check Firebase Console > Performance Monitoring

3. **Error tracking**: Consider adding Sentry or similar service

## Rollback

To rollback to a previous deployment:

```bash
firebase hosting:clone SOURCE_SITE_ID:SOURCE_CHANNEL_ID TARGET_SITE_ID:live
```

Or use the Firebase Console to restore a previous version.

## Troubleshooting

### Build fails
- Check Node.js version (needs 18+)
- Clear `node_modules` and `package-lock.json`, then reinstall
- Verify all environment variables are set

### Deployment fails
- Ensure Firebase CLI is logged in: `firebase login`
- Check project ID: `firebase projects:list`
- Verify `firebase.json` configuration

### App doesn't load
- Check browser console for errors
- Verify Firebase config in production
- Check Firestore security rules
- Ensure authentication is properly configured

### 404 errors on refresh
- Verify `firebase.json` has the rewrite rule to `/index.html`
