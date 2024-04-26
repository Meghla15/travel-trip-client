import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDDHYx0YRAapPtAloR4RS56t_VzyuyxrFU",
  authDomain: "travel-trip-632b2.firebaseapp.com",
  projectId: "travel-trip-632b2",
  storageBucket: "travel-trip-632b2.appspot.com",
  messagingSenderId: "69232176428",
  appId: "1:69232176428:web:2c807ec7ae4559f384d089"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;