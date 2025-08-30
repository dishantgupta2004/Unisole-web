import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQM6awoHckvatY3NGWp2ELfgRD1YJJAds",
  authDomain: "unisole-web.firebaseapp.com",
  projectId: "unisole-web",
  storageBucket: "unisole-web.firebasestorage.app",
  messagingSenderId: "1062888441349",
  appId: "1:1062888441349:web:4d5fe0e19449392d3cbe6c",
  measurementId: "G-EW0KGBDFRB"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firestore Database
const db = getFirestore(app);

// Authentication
const auth = getAuth(app);

// Google Authentication Provider
const provider = new GoogleAuthProvider();

// RecaptchaVerifier and Phone Auth
// Note: You don't need to configure RecaptchaVerifier here unless you're doing global setup.
export { auth, provider, db, collection, addDoc };
