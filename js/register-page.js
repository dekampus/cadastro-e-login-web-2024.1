const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let cpf = document.getElementById('cpf').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    saveToStorage(name, cpf, email, password);
})

function saveToStorage(name, cpf, email, password) {
    let user = {
        name: name,
        cpf: cpf,
        email: email,
        password: password
    };

    console.table(user);

    let userJSON = JSON.stringify(user);

    sessionStorage.setItem(email, userJSON);
}