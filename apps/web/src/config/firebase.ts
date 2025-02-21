// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY ?? "",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN ?? "",
  projectId: process.env.FIREBASE_PROJECT_ID ?? "",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET_ID ?? "",
  messagingSenderId: process.env.FIREBASE_MESSAGING_ID ?? "",
  appId: process.env.FIREBASE_APP_ID ?? "",
  measurementId: process.env.FIREBASE_MEASUREMENT_ID ?? "",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

auth.useDeviceLanguage();

export type FirebaseConfig = typeof firebaseConfig;

export { auth };
