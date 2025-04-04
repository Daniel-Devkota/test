import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your Firebase configuration object (from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyBo6E65Z8ep0jFlWST2VfgdzKw_-A9B6ac",
  authDomain: "strata-management-projec-93ace.firebaseapp.com",
  projectId: "strata-management-projec-93ace",
  storageBucket: "strata-management-projec-93ace.firebasestorage.app",
  messagingSenderId: "18815964419",
  appId: "1:18815964419:web:09081f3bd46922b02ec536"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };