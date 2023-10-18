import firebase from "firebase"
import "firebase/auth"
import "firebase/firebase"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyA1E4bQ-25y2X7pqCYjWcOv1kmbfE-eRU0",
  authDomain: "olx-clone-f2a68.firebaseapp.com",
  projectId: "olx-clone-f2a68",
  storageBucket: "olx-clone-f2a68.appspot.com",
  messagingSenderId: "76470599980",
  appId: "1:76470599980:web:3c55bb1c246ba4978b6c89",
  measurementId: "G-X1KH8DC6CZ"
};


export const Firebase = firebase.initializeApp(firebaseConfig);
