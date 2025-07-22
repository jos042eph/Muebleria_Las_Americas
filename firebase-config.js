// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAkY_O8fzNMr0ehvGhD7VI4HhG1O8uOn_g",
  authDomain: "mueblerialasamericas-dea3c.firebaseapp.com",
  projectId: "mueblerialasamericas-dea3c",
  storageBucket: "mueblerialasamericas-dea3c.appspot.com",
  messagingSenderId: "226678322678",
  appId: "1:226678322678:web:d81a2483342bb2fdee03d7"
};

const app = initializeApp(firebaseConfig);

export { app };
