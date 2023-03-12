import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAm4DVIpEi81VqWfzTQMTLzQXEauRLpGNY",
  authDomain: "miniproyecto-2-1b2f8.firebaseapp.com",
  databaseURL: "https://miniproyecto-2-1b2f8-default-rtdb.firebaseio.com",
  projectId: "miniproyecto-2-1b2f8",
  storageBucket: "miniproyecto-2-1b2f8.appspot.com",
  messagingSenderId: "956029844631",
  appId: "1:956029844631:web:2d29eab24aacb7b98cbdd2",
  measurementId: "G-V4CZY829J2"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);