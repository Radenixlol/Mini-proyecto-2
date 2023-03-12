import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);

async function getCities(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
  }