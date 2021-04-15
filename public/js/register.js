const button = document.querySelector('#registerButton');
const inputFields = document.querySelectorAll('.inputRegister');
const errorMessages = {
  1: 'The entered e-mails are not matching.',
  2: 'You must accept the privacy policy to continue.',
  3: 'All fields must be entered.',
}

function writeError(number) {
  const errBox = document.querySelector('#warningText');
  
  errBox.textContent = errorMessages[number];
  errBox.classList.remove('hidden');
}

button.addEventListener('mouseup', (e) => {
  e.preventDefault();
  const email = document.querySelector('#registerEmail').value;
  const emailCheck = document.querySelector('#registerEmailCheck').value;
  const checkbox = document.querySelector('#checkbox');

  console.log(email);

  if(email !== emailCheck){
    writeError(1);
    return;
  }

  if(!checkbox.checked){
    writeError(2);
    return;
  }

  if(email.length === 0 || emailCheck.length === 0){
    writeError(3);
    return;
  }

  if(email.length < 3 && emailCheck.length < 3) {
    writeError(4);
    return;
  };

  const emailObj = { email };

  const regReq = new Request('/registration-form', {
    method: 'post',
    headers: {'Content-type':'application/json'},
    body: JSON.stringify(emailObj)
  });

  fetch(regReq)
    .then((resp) => resp.json())
    .then((rsrc) => {
      console.log(rsrc);
    });
});

inputFields.forEach((element) => {
  element.addEventListener('click', () => {
    const errBox = document.querySelector('#warningText');
    errBox.classList.add('hidden');
  });
});
