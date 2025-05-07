import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
function Button(){
    console.log(email.value);
    console.log(password.value);
    
    
    console.log("Test");
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    
}
var btn = document.getElementById("Login");

var email = document.getElementById("email");
var password = document.getElementById("phone");

btn.addEventListener("click",Button);



const firebaseConfig = {
    apiKey: "AIzaSyDrS0NxFZgXi9L6vECoDzJo5jcmjEuict4",
    authDomain: "authentication-5d06a.firebaseapp.com",
    projectId: "authentication-5d06a",
    storageBucket: "authentication-5d06a.firebasestorage.app",
    messagingSenderId: "328787303129",
    appId: "1:328787303129:web:ba37f70594c827ace5bcc8",
    measurementId: "G-Q05RP2JN55"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);