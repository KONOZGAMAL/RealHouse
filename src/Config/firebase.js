// import { getAuth } from "firebase/auth";
// import { initializeApp } from "firebase/app";
// import {getFirestore} from "firebase/firestore";
// const firebaseConfig = {
//   // apiKey: "AIzaSyBSmmPauLgP0EWt0FRymzQw1ejRUBPe6m0",
//   // authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   // projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
//   // storageBucket: import.meta.env.REACT_APP_FIREABSE_STORAGE_BUCKET,
//   // messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   // appId: import.meta.env.REACT_APP_FIREBASE_APP_ID,
//   // measurementId: import.meta.env.REACT_APP_FIREBASE_MEASUREMENT_ID,

//   apiKey: "AIzaSyAYALD-Q1JUUPDY69K-9tyvOX1rdvqR_z0",
//   authDomain: "real-house-65437.firebaseapp.com",
//   projectId: "real-house-65437",
//   storageBucket: "real-house-65437.appspot.com",
//   messagingSenderId: "228031934800",
//   appId: "1:228031934800:web:31504c3c95f6ace5a4bc55",
// };

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
