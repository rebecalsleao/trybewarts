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

function desabilitar() {
  const agreement = document.getElementById('agreement');
  const button = document.getElementById('submit-btn');
  button.disabled = !agreement.checked;
  button.disabled = '';

  if (document.getElementById('agreement').checked === false) {
    document.getElementById('submit-btn').disabled = 'disabled';
  }
}
desabilitar();

const textArea = document.getElementById('textarea');
const characterCounter = document.getElementById('counter');
const maxNumOfChars = 500;
const countCharacters = () => {
  const numOfEnteredChars = textArea.value.length;
  const counter = maxNumOfChars - numOfEnteredChars;
  characterCounter.textContent = `${counter}/500`;
};
textArea.addEventListener('input', countCharacters);

function formData() {
  const nameValue = document.getElementById('input-name').value;
  const lastNameValue = document.getElementById('input-lastname').value;
  const emailValue = document.getElementById('input-email').value;
  const houseValue = document.getElementById('house').value;
  const familyValue = document.getElementById('evaluation-form').elements['family'].value;

  const formValue = {
    name: nameValue,
    lastName: lastNameValue,
    email: emailValue,
    house: houseValue,
    family: familyValue,
  };
  console.log(formValue);
}
