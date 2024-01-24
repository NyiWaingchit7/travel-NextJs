import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBej7Z1BKizB0E50TqJvYGFsknQtAlWi-U",
  authDomain: "travel-8bf92.firebaseapp.com",
  projectId: "travel-8bf92",
  storageBucket: "travel-8bf92.appspot.com",
  messagingSenderId: "53564227798",
  appId: "1:53564227798:web:62ebffb0c376f9369cc977",
  measurementId: "G-93HLBWQKRT",
};
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
