function onClickLogin() {
  const email = 'tryber@teste.com';
  const password = '123456';
  const inputEmail = document.getElementById('email');
  const inputPassword = document.getElementById('password');

  if (email === inputEmail.value && password === inputPassword.value) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
onClickLogin();
