const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let email = document.getElementById('email');
    let password = document.getElementById('password');

    if (email.value == 'test@server.com' && password.value == 'senha321') {
        loginSucess();
    } else {
        loginUnsucess();
    }
})

function loginSucess() {
    const loginFormContainer = document.getElementsByClassName('login-form-container')[0];
    loginForm.style.display = 'none';

    let p = document.createElement('p');
    p.innerText = 'Logado com sucesso. Bem-vindo!';

    loginFormContainer.appendChild(p);
}

function loginUnsucess() {
    let p = document.createElement('p');
    p.innerText = 'E-mail ou senhas incorretos. Tente novamente.';

    loginForm.appendChild(p);
}