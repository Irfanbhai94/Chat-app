// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";           // For Authentication
import { getDatabase } from "firebase/database";   // For Realtime Database

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMpDIRLMlP5VAJM7ZcVE5KiJsZhGK1bo4",
  authDomain: "itachi-397b8.firebaseapp.com",
  databaseURL: "https://itachi-397b8-default-rtdb.firebaseio.com", // Ensure DB URL is correct
  projectId: "itachi-397b8",
  storageBucket: "itachi-397b8.appspot.com",
  messagingSenderId: "334408475316",
  appId: "1:334408475316:web:a4706b9fe8c1c3cac52de1",
  measurementId: "G-LWQ34RMD60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);           // Export Authentication
export const database = getDatabase(app);   // Export Realtime Database
