// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRcBKQVdyL4cl0aCPHheqBQk-OqGCouig",
  authDomain: "purohit-khana-khajana.firebaseapp.com",
  projectId: "purohit-khana-khajana",
  storageBucket: "purohit-khana-khajana.appspot.com",
  messagingSenderId: "256217965061",
  appId: "1:256217965061:web:96954e96200fec8e75726c",
  measurementId: "G-ZXGVS4Z3NX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, updateDoc, deleteDoc, doc, getDocs };
