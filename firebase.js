// firebase.js
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  RecaptchaVerifier, 
  signInWithPhoneNumber, 
  PhoneAuthProvider, 
  signInWithCredential
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBu6tcDytHr9Fc8q5uLRCFpbd5WEs371aM",
  authDomain: "ration-app-4b7a6.firebaseapp.com",
  projectId: "ration-app-4b7a6",
  storageBucket: "ration-app-4b7a6.firebasestorage.app",
  messagingSenderId: "697664283469",
  appId: "1:697664283469:web:f4fdb511c060f60a324d04",
  measurementId: "G-CTD8NL77NK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider, signInWithCredential };
