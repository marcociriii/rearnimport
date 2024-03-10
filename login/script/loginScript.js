import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
import { getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
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
  const analytics = getAnalytics(app);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const googleLogin = async() => {
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      window.location.replace("../");
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      var textGoogle = document.getElementById("testoiconaGoogle");
      var loadingGoogle = document.getElementById("googleLoadingL");
      textGoogle.style.display = 'block';
      loadingGoogle.style.display = 'none';
    });
  };

  const signInButtonGoogle = document.getElementById("continuaConGoogleButton");
  signInButtonGoogle.addEventListener('click', googleLogin);


  const user = auth.currentUser;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      const testTitle = document.getElementById("testTitle");
      testTitle.textContent = user.email;
    } else {
      console.log("Nessun utente loggato")
    }
  });
});