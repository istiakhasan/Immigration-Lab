import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA3AO0YfpVNJgOYKFd7y6hbUPHTDiJlK-o",
  authDomain: "immigration-lab-47778.firebaseapp.com",
  projectId: "immigration-lab-47778",
  storageBucket: "immigration-lab-47778.appspot.com",
  messagingSenderId: "155955451166",
  appId: "1:155955451166:web:b5bbf823b5699a4b83e50f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;