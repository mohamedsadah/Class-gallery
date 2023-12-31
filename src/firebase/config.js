import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
import  "firebase/storage";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyBczjcFHzHpT5-yZJ75cDaGs8fqNKyo_rk",
  authDomain: "class-gallery-31ed0.firebaseapp.com",
  projectId: "class-gallery-31ed0",
  storageBucket: "class-gallery-31ed0.appspot.com",
  messagingSenderId: "98150000391",
  appId: "1:98150000391:web:ed28b9303316b46be707a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const database = getFirestore(app);

export { auth, storage, database};
