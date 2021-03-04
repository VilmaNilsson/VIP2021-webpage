const qa = document.querySelectorAll('.QA');
qa.forEach((element) => {
  element.addEventListener('click', () => {
    const answer = element.childNodes[1];

    if (answer.classList.contains('answerClose')) {
      answer.classList.add('answerOpen');
      answer.classList.remove('answerClose');
    } else {
      answer.classList.add('answerClose');
      answer.classList.remove('answerOpen');
    }
  });
});

const sendButton = document.querySelector('#sendButt');

sendButton.addEventListener('click', (event) => {
  event.preventDefault();

  const errorMessage = document.querySelector('.hiddenMessage');
  if (errorMessage) {
    errorMessage.classList.remove('errorMessage');
    errorMessage.classList.add('hiddenMessage');
  }
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const subject = document.querySelector('#subject').value;
  const message = document.querySelector('#message').value;

  if (name === '' || email === '' || subject === '' || message === '') {
    errorMessage.classList.add('errorMessage');
    errorMessage.classList.remove('hiddenMessage');
    return;
  }

  const info = {
    name,
    from: email,
    subject,
    message,
  };

  console.log(info);

  const serverInfo = JSON.stringify(info);

  console.log(serverInfo);

  const req = new Request('http://localhost:3000/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: serverInfo,
  });

  fetch(req)
    .then((resp) => resp.json)
    .then((rsrc) => {
      // console.log(rsrc);
    });
});
