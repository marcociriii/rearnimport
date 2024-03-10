import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, getRedirectResult, signOut, signInWithRedirect, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
document.addEventListener('DOMContentLoaded', function() {
      const firebaseConfig = {
        apiKey: "AIzaSyCC7-PUPxyU0FwOaDt0darUjscFv_wDTfc",
        authDomain: "rearndbapp.firebaseapp.com",
        projectId: "rearndbapp",
        storageBucket: "rearndbapp.appspot.com",
        messagingSenderId: "924349317391",
        appId: "1:924349317391:web:97046d5ad5fd3f1ccffe7a",
        measurementId: "G-162DWHF2BK"
      };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();

    setTimeout(function() {
        const user = auth.currentUser;
        
        if (user) {
            alert("Loggato. ID: " + user.uid);
        } else {
            window.location.replace("login");
        }
    }, 1000);
});