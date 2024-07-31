const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let user = JSON.parse(sessionStorage.getItem(email));

    if (!user)
        loginUnsuccess();
    else if (email == user.email && password == user.password)
        loginSuccess();
    else
        loginUnsuccess();
})

function loginSuccess() {
    const loginFormContainer = document.getElementsByClassName('login-form-container')[0];
    loginForm.style.display = 'none';

    let p = document.createElement('p');
    p.innerText = 'Logado com sucesso. Bem-vindo!';

    loginFormContainer.appendChild(p);
}

function loginUnsuccess() {
    if (document.getElementById('login-unsuccess-p')) {
        let node = document.getElementById('login-unsuccess-p');
        node.parentNode.removeChild(node);
    }
    
    let p = document.createElement('p');
    p.id = 'login-unsuccess-p';
    p.innerText = 'E-mail ou senhas incorretos. Tente novamente.';

    loginForm.appendChild(p);
}