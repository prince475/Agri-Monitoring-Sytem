import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh4kPuX-Qow04qn7Q5tMJVvaL6rxICpD0",
  authDomain: "agri-monitoring-system.firebaseapp.com",
  projectId: "agri-monitoring-system",
  storageBucket: "agri-monitoring-system.appspot.com",
  messagingSenderId: "66350551361",
  appId: "1:66350551361:web:3a9e19ca2f1569946191c0",
  measurementId: "G-Q648DE66K3"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
