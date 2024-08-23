// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAnalytics} from "firebase/analytics";
import {getAuth , GoogleAuthProvider} from "firebase/auth";
import { getFirestore , doc , setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAruXXv6lKSRIKDQb-VHeBlUb-kced_Fa0",
  authDomain: "contact-app-27a11.firebaseapp.com",
  projectId: "contact-app-27a11",
  storageBucket: "contact-app-27a11.appspot.com",
  messagingSenderId: "619575936973",
  appId: "1:619575936973:web:2a9d2e315140c2a2b26684"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export {db , auth, provider, doc, setDoc }