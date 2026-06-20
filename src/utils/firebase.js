// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnBTUJw81s8NSvh8UOcOR7x8y-s3aQEls",
  authDomain: "fir-gpt-ad6d6.firebaseapp.com",
  projectId: "fir-gpt-ad6d6",
  storageBucket: "fir-gpt-ad6d6.firebasestorage.app",
  messagingSenderId: "394280465939",
  appId: "1:394280465939:web:ceed61439473ea769031e6",
  measurementId: "G-E7Q96Q4SMV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
export const auth = getAuth();
