
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSmmPauLgP0EWt0FRymzQw1ejRUBPe6m0",
  authDomain: "realhouse-80ab4.firebaseapp.com",
  projectId: "realhouse-80ab4",
  storageBucket: "realhouse-80ab4.appspot.com",
  messagingSenderId:"763310185047",
  appId: "1:763310185047:web:52140c3b8f3a8a3f0fe112",
  measurementId:"G-ZZGHPFXHLR",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
