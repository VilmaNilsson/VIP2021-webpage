const button = document.querySelector('#registerButton');
const inputFields = document.querySelectorAll('.inputRegister');
const errorMessages = {
  1: 'The entered e-mails are not matching.',
  2: 'You must accept the privacy policy to continue.',
  3: 'All fields must be entered.',
  4: 'Your username must be longer than 3 characters.',
  5: 'This username is already taken. Pleasy try something else.',
}

function writeError(number) {
  const errBox = document.querySelector('#warningText');
  
  errBox.textContent = errorMessages[number];
  errBox.classList.remove('hidden');
}

button.addEventListener('mouseup', (e) => {
  e.preventDefault();
  const username = document.querySelector('#registerUsername').value;
  const email = document.querySelector('#registerEmail').value;
  const emailCheck = document.querySelector('#registerEmailCheck').value;
  const checkbox = document.querySelector('#checkbox');

  if(email !== emailCheck){
    writeError(1);
    return;
  }

  if(!checkbox.checked){
    writeError(2);
    return;
  }

  if(username.length === 0 || email.length === 0 || emailCheck.length === 0){
    writeError(3);
    return;
  }
  if(username.length < 3) {
    writeError(4);
    return;
  };

  const user = {
    username,
    email,
  };

  console.log(user);

});

inputFields.forEach((element) => {
  element.addEventListener('click', () => {
    const errBox = document.querySelector('#warningText');

    errBox.classList.add('hidden');
  });
});