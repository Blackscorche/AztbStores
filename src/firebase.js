// Import the necessary Firebase SDK modules
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVq54DqkpX0-UtgyZqIKyF7iqdvHSAGjc",
  authDomain: "aztbstore.firebaseapp.com",
  projectId: "aztbstore",
  storageBucket: "aztbstore.appspot.com",
  messagingSenderId: "492374575759",
  appId: "1:492374575759:web:0f08a59becd4d9bc94fefa",
  measurementId: "G-4TDJMT88YC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Firebase Authentication
const provider = new GoogleAuthProvider();
const database = getDatabase(app); // Firebase Realtime Database
const db = getFirestore(app); // Initialize Firestore

// Export all necessary Firebase instances
export { app, auth, provider, database, analytics, db };
