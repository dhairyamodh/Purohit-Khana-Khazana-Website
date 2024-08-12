// src/firestoreFunctions.js
import { collection, addDoc, doc, updateDoc, deleteDoc, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/Config';

export const addItem = async (collectionName, item) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), item);
    console.log(`Document written with ID in ${collectionName}: `, docRef.id);
  } catch (error) {
    console.error(`Error adding document to ${collectionName}: `, error);
  }
};

export const updateItem = async (collectionName, docId, updatedData) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, updatedData);
    console.log(`Document updated in ${collectionName} with ID: ${docId}`);
  } catch (error) {
    console.error(`Error updating document in ${collectionName}: `, error);
  }
};

export const deleteItem = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
    console.log(`Document deleted from ${collectionName} with ID: ${docId}`);
  } catch (error) {
    console.error(`Error deleting document from ${collectionName}: `, error);
  }
};

export const fetchItems = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const itemsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return itemsList;
  } catch (error) {
    console.error(`Error fetching items from ${collectionName}: `, error);
  }
};
