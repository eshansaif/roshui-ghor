/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1eui4e7Ki_KGaBYnLgsGHvgiTffgbmnk",
  authDomain: "roshui-ghor.firebaseapp.com",
  projectId: "roshui-ghor",
  storageBucket: "roshui-ghor.appspot.com",
  messagingSenderId: "1040760368303",
  appId: "1:1040760368303:web:523fd84ff305240708785a",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
