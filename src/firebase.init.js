import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE1ZtSsJ6hdIL_48bPC7Y7ImB0_CFyUQA",
  authDomain: "bike-show-371d1.firebaseapp.com",
  projectId: "bike-show-371d1",
  storageBucket: "bike-show-371d1.appspot.com",
  messagingSenderId: "972165038818",
  appId: "1:972165038818:web:c4b736e54902ecb5e2d4bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
