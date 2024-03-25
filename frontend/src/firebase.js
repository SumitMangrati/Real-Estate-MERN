// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f7a30.firebaseapp.com",
  projectId: "mern-estate-f7a30",
  storageBucket: "mern-estate-f7a30.appspot.com",
  messagingSenderId: "146534288196",
  appId: "1:146534288196:web:20e10cf82a786219072511"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);