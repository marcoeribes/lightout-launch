'using strict';

document.querySelector('.button').addEventListener('click', function() {
    console.log('da button works');

    let user = {};
    const first = document.querySelector('.input-box.first-name').value;
    const last = document.querySelector('.input-box.last-name').value;
    const emailAdd = document.querySelector('.input-box.email').value;
    const pass = document.querySelector('.input-box.password').value;
    
    if (!(first && last && emailAdd && pass)) {
        console.log('add something to input');
    }
    else {
        user =  {
            firstName: first,
            lastNam: last,
            email: emailAdd,
            password: pass
        };

        console.log(user);

        const userString = JSON.stringify(user);

        console.log(userString);

    }



    

    

});