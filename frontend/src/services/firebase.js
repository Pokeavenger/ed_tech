import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIL1M9OYgtG-6foNIOOqCelx8wLXBfCZM",
  authDomain: "edtech-platform-714a2.firebaseapp.com",
  projectId: "edtech-platform-714a2",
  storageBucket: "edtech-platform-714a2.firebasestorage.app",
  messagingSenderId: "664010730231",
  appId: "1:664010730231:web:88846043eaecadb94581f2",
  measurementId: "G-5L0P7W6XBC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);