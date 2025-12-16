import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

// Same Firebase config you already use
const firebaseConfig = {
  apiKey: "AIzaSyA7ZR8ftxsBWgERs0_agyJxZWxvXIHIH44",
  authDomain: "login-example-27888.firebaseapp.com",
  projectId: "login-example-27888",
  storageBucket: "login-example-27888.firebasestorage.app",
  messagingSenderId: "755823084832",
  appId: "1:755823084832:web:9b67689d72faccbe46c345",
};

// Initialize Firebase (REQUIRED on this page)
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const message = document.getElementById("message");

// Listen for logged-in user
onAuthStateChanged(auth, (user) => {
  if (user) {
    message.textContent = `Signed in ${user.email}`;
  } else {
    // If not logged in, redirect back to login
    window.location.href = "index.html";
  }
});