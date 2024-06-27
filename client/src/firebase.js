// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate1-fdbad.firebaseapp.com",
    projectId: "mern-estate1-fdbad",
    storageBucket: "mern-estate1-fdbad.appspot.com",
    messagingSenderId: "1014159228046",
    appId: "1:1014159228046:web:7fcc121b0572243362dddf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);