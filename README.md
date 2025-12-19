# Fitness Backend

Backend for fitness web application (course project).

## Tech stack
- Node.js
- Express
- Firebase (Auth, Firestore)

## How to run
```bash
npm install
npm run dev

## Authentication

Backend uses Firebase Authentication.

### Supported methods
- Email / Password
- Google Sign-In

### Authorization
All protected endpoints require header:

Authorization: Bearer <Firebase ID Token>

The token is verified using Firebase Admin SDK.
