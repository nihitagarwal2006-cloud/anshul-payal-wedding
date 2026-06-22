import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAExKHyGkR3PCMR-cYX_5EUPgu7QsrFdKE",
  authDomain: "anshul-payal.firebaseapp.com",
  projectId: "anshul-payal",
  storageBucket: "anshul-payal.firebasestorage.app",
  messagingSenderId: "866560338966",
  appId: "1:866560338966:web:8c965cbc3f657ddca01937",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);