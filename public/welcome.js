// welcome.js

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

auth.onAuthStateChanged(user => {
    if (!user) {
        window.location.href = 'index.html';
    }
});

document.getElementById('logout-btn').addEventListener('click', () => {
    auth.signOut().then(() => {
        window.location.href = 'index.html';
    }).catch((error) => {
        console.log(error.message);
    });
});
