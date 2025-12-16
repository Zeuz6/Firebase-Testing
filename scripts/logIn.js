import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyA7ZR8ftxsBWgERs0_agyJxZWxvXIHIH44",
      authDomain: "login-example-27888.firebaseapp.com",
      projectId: "login-example-27888",
      storageBucket: "login-example-27888.firebasestorage.app",
      messagingSenderId: "755823084832",
      appId: "1:755823084832:web:9b67689d72faccbe46c345",
      measurementId: "G-6BPC5Q7SYX"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    
    const submit = document.getElementById('create-account');

    submit.addEventListener("click", function(event) {
      event.preventDefault();
      
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
      signInWithEmailAndPassword (auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          alert("Loging in...");
          window.location.href = "signedIn.html"
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
          // ..
      });
    });
    