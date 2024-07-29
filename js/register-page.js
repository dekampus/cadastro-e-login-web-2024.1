const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let cpf = document.getElementById('cpf').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
})