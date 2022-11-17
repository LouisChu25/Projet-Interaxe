const password = 12345;


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#submit').onclick = function() {
        const userinputt = document.querySelector('#password').value;
        verify(userinputt);
     }
});


function verify(userinput) {
    if (userinput == password) {
        console.log(userinput)
        alert('Félicitation vous avez trouvé')
        window.location.href = 'index.html';
        
    }
    else {
        alert('Cela ne semble pas fonctionner, trouvez autre chose')
    }
};


