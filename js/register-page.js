const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let cpf = document.getElementById('cpf').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (saveToStorage(name, cpf, email, password))
        registerSuccess();
    else
        registerUnsuccess();
})

function saveToStorage(name, cpf, email, password) {
    let user = {
        name: name,
        cpf: cpf,
        email: email,
        password: password
    };

    if (sessionStorage.getItem(email))
        return false;

    let userJSON = JSON.stringify(user);

    sessionStorage.setItem(email, userJSON);

    return true;
}

function registerSuccess() {
    const registerFormContainer = document.getElementsByClassName('register-form-container')[0];
    registerForm.style.display = 'none';

    let p = document.createElement('p');
    p.innerText = 'Cadastrado com sucesso';

    let a = document.createElement('a');
    a.href = './index.html';
    a.innerText = 'Entrar';

    let registerLink= document.createElement('a');
    registerLink.href = './register.html';
    registerLink.innerText = 'Fazer novo cadastrado';

    registerFormContainer.append(p, a, registerLink);
}

function registerUnsuccess() {
    if (document.getElementById('unsuccess-p')) {
        let node = document.getElementById('unsuccess-p');
        node.parentNode.removeChild(node);
    }
    
    let p = document.createElement('p');
    p.id = 'unsuccess-p';
    p.innerText = 'Não foi possível realizar o cadastro.\nE-mail já cadastrado.';

    registerForm.appendChild(p);
}