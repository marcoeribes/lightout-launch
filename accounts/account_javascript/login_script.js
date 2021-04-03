console.log(firebase);
const auth = firebase.auth();
const firestore = firebase.firestore();

console.log("Log In");

//Listen for auth status changes

auth.onAuthStateChanged(user => {
    console.log(user);
});


// Log In

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {

    e.preventDefault();
    
    // get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    if(email == 0) document.querySelector(".error-text").innerText = "Please enter a valid email."; 
    else if(password == 0) document.querySelector(".error-text").innerText = "Please enter a valid password."; 
    else{
        auth.signInWithEmailAndPassword(email, password).then(cred => {
            location.replace("account.html");
        }).catch(error => {
            document.querySelector(".error-text").innerText = "Sorry, your email or password were incorrect."; 
        });
    }
});