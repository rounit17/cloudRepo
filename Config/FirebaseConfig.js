// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "cloudfilemanager-aa73c.firebaseapp.com",
  projectId: "cloudfilemanager-aa73c",
  storageBucket: "cloudfilemanager-aa73c.appspot.com",
  messagingSenderId: "515205709542",
  appId: "1:515205709542:web:f84deb8083727e40770527",
  measurementId: "G-82V926JKBY"
};

export const app = initializeApp(firebaseConfig);

