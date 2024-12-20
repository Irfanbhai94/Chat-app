import { auth, database } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { ref, push, onChildAdded } from "firebase/database";

// Sign-Up Function
window.signUp = function() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Sign-Up Successful!");
            showChat();
        })
        .catch(error => alert(error.message));
}

// Login Function
window.login = function() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Login Successful!");
            showChat();
        })
        .catch(error => alert(error.message));
}

// Show Chat Section After Login/Signup
function showChat() {
    document.getElementById("auth-section").style.display = "none";
    document.getElementById("chat-section").style.display = "block";
    loadMessages();
}

// Send Message to Firebase Database
window.sendMessage = function() {
    const message = document.getElementById("message").value;
    const user = auth.currentUser.email;
    const messagesRef = ref(database, "messages");

    push(messagesRef, { user, message });
    document.getElementById("message").value = '';
}

// Load Messages from Firebase Database
function loadMessages() {
    const messagesRef = ref(database, "messages");

    onChildAdded(messagesRef, (snapshot) => {
        const msg = snapshot.val();
        const li = document.createElement("li");
        li.innerText = `${msg.user}: ${msg.message}`;
        document.getElementById("messages").appendChild(li);
    });
}
