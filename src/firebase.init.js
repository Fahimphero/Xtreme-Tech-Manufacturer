// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDiIcgv1irSNvcJaI65VXQAZTDwouWXE2o",
    authDomain: "xtreme-tech.firebaseapp.com",
    projectId: "xtreme-tech",
    storageBucket: "xtreme-tech.appspot.com",
    messagingSenderId: "275458664685",
    appId: "1:275458664685:web:8b19a8ce706194ba22c4e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;