const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let user = JSON.parse(sessionStorage.getItem(email));

    if (!user)
        loginUnsuccess();
    else if (email == user.email && password == user.password)
        loginSuccess(user);
    else
        loginUnsuccess();
})

function loginSuccess(user) {
    // Maybe you should redirect to a page.
    const loginFormContainer = document.getElementsByClassName('login-form-container')[0];
    loginForm.style.display = 'none';

    let p = document.createElement('p');
    p.innerText = `Logado com sucesso. Bem-vindo, ${user.name}!`;

    let a = document.createElement('a');
    a.href = './index.html';
    a.innerText = 'Voltar para a página principal';

    loginFormContainer.append(p, a);
}

function loginUnsuccess() {
    if (document.getElementById('login-unsuccess-p')) {
        let node = document.getElementById('login-unsuccess-p');
        node.parentNode.removeChild(node);
    }

    let passwordInput = document.getElementsByClassName('password-input')[0];
    
    let p = document.createElement('p');
    p.id = 'login-unsuccess-p';
    p.innerText = 'E-mail ou senhas incorretos. \nTente novamente.';
    p.classList.add('login-unsuccess-p-appear');

    passwordInput.appendChild(p);
}