import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNjB0x2WTuQoGbkEhjDXCvbH5FN_yBxvk",
  authDomain: "wishlist-10714.firebaseapp.com",
  projectId: "wishlist-10714",
  storageBucket: "wishlist-10714.firebasestorage.app",
  messagingSenderId: "607066180709",
  appId: "1:607066180709:web:d6cc3cdf0873391dccca8c",
  measurementId: "G-K46TV5LNXQ"
};

// Initialize Firebase (SSR friendly)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
