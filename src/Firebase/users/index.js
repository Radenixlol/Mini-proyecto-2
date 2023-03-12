import {
  doc,
  addDoc,
  collection,
  updateDoc,
  getDoc,
  setDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../config";

export const USERS_COLLECTION = "users";

export async function createUser(data) {
  console.log(data)
  const { uid } = data;

  if (uid) {
    return setDoc(doc(db, USERS_COLLECTION, uid), data);
  }

  return addDoc(collection(db, USERS_COLLECTION), data);
}

export async function updateUser(userId, data) {
  const userRef = doc(db, USERS_COLLECTION, userId);
  return updateDoc(userRef, data);
}

export async function getUserById(userId) {
  const userRef = doc(db, USERS_COLLECTION, userId);
  return getDoc(userRef);
}

export async function getUserProfile(email) {
  const userQuery = query(
    collection(db, USERS_COLLECTION),
    where("email", "==", email)
  );

  const results = await getDocs(userQuery);

  if (results.size > 0) {
    const [user] = results.docs.map((item) => ({
      ...item.data(),
      id: item.id,
    }));
    return user;
  }

  return null;
}
