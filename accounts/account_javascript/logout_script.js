console.log(firebase);
const auth = firebase.auth();
const firestore = firebase.firestore();

console.log("Welcome to Lightout!");
//Listen for auth status changes

auth.onAuthStateChanged(user => {
    if (user){
        console.log(user.uid);
    }
    else {
        console.log("no user signed in");
    }
    console.log(user);
     
});



// Log Out

const logout = document.getElementById("logout-button");
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('User signed out');
        location.replace("../index.html");
    })
});