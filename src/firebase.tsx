import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpA99IC2TkDJIphcpy-JvnDdqJhsxnSg8",
    authDomain: "unisole-8c002.firebaseapp.com",
    projectId: "unisole-8c002",
    storageBucket: "unisole-8c002.appspot.com",
    messagingSenderId: "583986063217",
    appId: "1:583986063217:web:62d5f2ae6da456859638d0",
    measurementId: "G-BYDGD4MD6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore Database
const db = getFirestore(app);

// Authentication
const auth = getAuth(app);

// Google Authentication Provider
const provider = new GoogleAuthProvider();

// RecaptchaVerifier and Phone Auth
// Note: You don't need to configure RecaptchaVerifier here unless you're doing global setup.
export { auth, provider, db, collection, addDoc };
