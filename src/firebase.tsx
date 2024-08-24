import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBpA99IC2TkDJIphcpy-JvnDdqJhsxnSg8",
    authDomain: "unisole-8c002.firebaseapp.com",
    projectId: "unisole-8c002",
    storageBucket: "unisole-8c002.appspot.com",
    messagingSenderId: "583986063217",
    appId: "1:583986063217:web:62d5f2ae6da456859638d0",
    measurementId: "G-BYDGD4MD6S"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithEmailAndPassword, RecaptchaVerifier, signInWithPhoneNumber };
