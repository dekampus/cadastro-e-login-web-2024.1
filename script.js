const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let email = document.getElementById('email');
    let password = document.getElementById('password');

    if (email.value == 'test@server.com' && password.value == 'senha321') {
        console.log('Login sucess');
    } else {
        console.log('Login unsucess')
    }
})