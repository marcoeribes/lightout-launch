console.log(firebase);
const auth = firebase.auth();
const firestore = firebase.firestore();

console.log("Sign Up!");

//Listen for auth status changes

auth.onAuthStateChanged(user => {
    console.log(user);
});


// Sign Up

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {

    e.preventDefault();
    
    // get user info
    const firstName = signupForm['signup-firstName'].value;
    const lastName = signupForm['signup-lastName'].value;
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    console.log('signup test button');

    // conditons before auth.createUser is called
    let errorText = document.querySelector(".error-text");
    switch (true){
        case (firstName == 0 || lastName == 0):
        errorText.innerText = "Please enter a valid name.";  
        break;
        case (email == 0):
        errorText.innerText = "Please enter a valid email."; 
        break;
        case (password == 0):
        errorText.innerText = "Please enter a valid password."; 
        break; 
        case (password.length < 8):
            errorText.innerText = "Please enter a password with 8 or more characters";
            break;
        //default case once all conditions are met
        default:
            auth.createUserWithEmailAndPassword(email, password)
            .then(cred => {
                console.log(cred);
                //create json object
                const uid = cred.user.uid;
                const data = {
                    id: uid,
                    email: email,
                    nameFirst: firstName,
                    nameLast: lastName,
                };
                // put json file into firestore db users
                firestore.collection('users').doc(uid).set(data)
                    .then(() => {
                        console.log("Document Successfully written");
                        location.replace("account.html");
                    })
                    .catch((error) => {
                        console.error("Error write document: ", error)
                        errorText.innerText = "Sorry, there is a problem with your account. Try again. "
                    });
            }).catch((error) => {
                
                // exception to catch specific error codes
                const errorCode = error.code;

                switch(errorCode){
                    case "auth/invalid-email":
                        errorText.innerText = "Please enter a valid email.";
                        break;
                    case "auth/email-already-in-use": // Catch error if email is already in use
                        errorText.innerText = "Email is already in use." 
                        break;
                    default:
                        errorText.innerText = "Sorry, there is a problem with your account. Try again. ";
                        break;
                }
                console.error("Error sign up: ", error);
            })
    }
});
