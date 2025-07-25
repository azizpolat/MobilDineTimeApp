// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1fKyCUVZDgQrwhmzcnb_4YA-fy6wIh_c",
  authDomain: "dine-time-2cfde.firebaseapp.com",
  projectId: "dine-time-2cfde",
  storageBucket: "dine-time-2cfde.firebasestorage.app",
  messagingSenderId: "576744854073",
  appId: "1:576744854073:web:cfceed5f16aa1aa2a873e8",
  measurementId: "G-107ZW1SV9N",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
