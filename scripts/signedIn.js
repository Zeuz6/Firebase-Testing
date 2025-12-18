import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

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
const logoutBtn = document.getElementById('logout');

// Listen for logged-in user
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "index.html";
    return;
  }

  const name = user.displayName;
  const email = user.email;
  message.textContent = `Signed in ${name}`;
});

logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "index.html";
});