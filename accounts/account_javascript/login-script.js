'using strict';

document.querySelector('.button').addEventListener('click', function() {

    const inputEmail = document.querySelector('.input-box.email').value;
    const inputPassword = document.querySelector('.input-box.password').value;

    if (!(inputEmail || inputPassword)){
        console.log("please input email and password");
    }
    else {

        const data = fetch('https://lightout.app/user.json');

        /*$.getJSON("./user.json", function(json) {
            console.log(json); // this will show the info it in firebug console
        }); */

        /*const fs = require('fs');

        fs.readFile('./customer.json', (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err)
                return
            }
            console.log('File data:', jsonString) 
        })*/
    }

});