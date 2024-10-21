// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEUu9KziRQ1gKZcw4glYDdt8xiOyRUmMk",
  authDomain: "my-health-f05ff.firebaseapp.com",
  projectId: "my-health-f05ff",
  storageBucket: "my-health-f05ff.appspot.com",
  messagingSenderId: "315800250386",
  appId: "1:315800250386:web:32e8f3c89a3ab8ae5d10cb"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig;