// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBunlKE7aVPaYgz2vESlU_-95tv5aesYlY",
  authDomain: "pic-lab-web.firebaseapp.com",
  projectId: "pic-lab-web",
  storageBucket: "pic-lab-web.appspot.com",
  messagingSenderId: "209279539523",
  appId: "1:209279539523:web:f6a66fe0325a1b72d377f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app