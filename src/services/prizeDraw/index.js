import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDR9JVK9I8gKRsro6i9AjKKF0GVLWFcvxw",
  authDomain: "fringeproject-a5478.firebaseapp.com",
  projectId: "fringeproject-a5478",
});

const db = getFirestore(firebaseApp);
const prizeDrawCollectionRef = collection(db, "prizeDraw");

export const createItem = async (item) => {
  const date = new Date();
  const options = { timeZone: "America/Sao_Paulo", hour12: false };
  const brazilDate = date.toLocaleDateString("pt-BR", options);
  const data = await addDoc(prizeDrawCollectionRef, {
    brazilDate,
    item,
  });
  console.log("Document written with ID: ", data);
};
