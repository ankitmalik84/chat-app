import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLsWnL8bE_yXhe7XgU8nQxSKidtqxMaBA",
  authDomain: "chat-app-9a99c.firebaseapp.com",
  projectId: "chat-app-9a99c",
  storageBucket: "chat-app-9a99c.appspot.com",
  messagingSenderId: "446786051443",
  appId: "1:446786051443:web:6c6e804dbbbce560d27906",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);