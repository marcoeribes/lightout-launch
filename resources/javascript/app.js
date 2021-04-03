console.log(firebase);

console.log(firebase);
const auth = firebase.auth();
const firestore = firebase.firestore();

console.log("Launch Site");

//Listen for auth status changes

auth.onAuthStateChanged(user => {
    console.log(user);
});

const login = document.querySelector("#login-button");
login.addEventListener('click', (e) => {
    e.preventDefault();

    auth.onAuthStateChanged(user => {
        if (user){
            console.log(user.uid);
            console.log("user signed in")
            location.replace("/accounts/account.html");
        }
        else{
            console.log("no user found");
            location.replace("/accounts/login.html");
        }
    })
});

const signup = document.querySelector("#signup-button");
signup.addEventListener('click', (e) => {
    e.preventDefault();

    auth.onAuthStateChanged(user => {
        if (user){
            console.log(user.uid);
            location.replace("/accounts/account.html");
        }
        else{
            console.log("no user found");
            location.replace("/accounts/signup.html");
        }
    })
});