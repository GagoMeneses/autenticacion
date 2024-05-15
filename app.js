// app.js

// Configura Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCUN2PuMcN3y1eTcUbmQdulOpgUUiegYPs",
  authDomain: "appreactlogin-83d65.firebaseapp.com",
  projectId: "appreactlogin-83d65",
  storageBucket: "appreactlogin-83d65.appspot.com",
  messagingSenderId: "62133223743",
  appId: "1:62133223743:web:64f2862bf3ee5794ead38a"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

document.getElementById('signup-btn').addEventListener('click', signUp);
document.getElementById('login-btn').addEventListener('click', logIn);

function signUp() {
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
          window.location.href = 'welcome.html';
      })
      .catch((error) => {
          document.getElementById('message').textContent = error.message;
      });
}

function logIn() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
          window.location.href = 'welcome.html';
      })
      .catch((error) => {
          document.getElementById('message').textContent = error.message;
      });
}
