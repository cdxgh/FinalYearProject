// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "rental-a4354.firebaseapp.com",
  projectId: "rental-a4354",
  storageBucket: "rental-a4354.appspot.com",
  messagingSenderId: "900216496270",
  appId: "1:900216496270:web:6f1efb01258db94aafe9df"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);