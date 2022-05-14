import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, query, where, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBfapQrv_xEPrHmE4HX1CihXq--8sm9OFI",
  authDomain: "darostore-ecommerce.firebaseapp.com",
  projectId: "darostore-ecommerce",
  storageBucket: "darostore-ecommerce.appspot.com",
  messagingSenderId: "24140316833",
  appId: "1:24140316833:web:2fa200b3c2b4216b0870e0",
};

const app = initializeApp(firebaseConfig);

const firestoreDB = getFirestore(app);

export default firestoreDB;

export async function getAllItems() {
  const myCollection = collection(firestoreDB, "products");
  const productsSnap = await getDocs(myCollection);
  return productsSnap.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
}

export async function getItemsCategory(categoryId) {
  const myCollection = collection(firestoreDB, "products");
  const queryProduct = query(myCollection, where("category", "==", categoryId));
  const productsSnap = await getDocs(queryProduct);
  return productsSnap.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
}

export async function getItemDetail(id) {
  const myCollection = collection(firestoreDB, "products");
  const productRef = doc(myCollection, id);
  const productSnap = await getDoc(productRef);
  return { ...productSnap.data(), id: productSnap.id };
}