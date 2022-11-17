let submit = document.querySelector('#submitPassword');
let password = document.querySelector('#password');
let error = document.querySelector('#error')

submit.addEventListener('click', e => {
    if(password.value == '4Vru/b5c$6tqsEd@SCTym%6b7'){
        document.location.href = 'ordinateur.html';
    } else {
            error.innerText = "Mot de passe incorrect"
    }
})