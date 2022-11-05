const $form = document.getElementById('form');
const $answer = document.getElementById('answer');

function aliceDecrypt(message) {
  let isNotDecrypted = true;

  if (message.length > 100000) {
    return 'The message is too long';
  }

  while (isNotDecrypted) {
    isNotDecrypted = false;
    for (let i = 0; i < message.length; i++) {
      if (message[i] === message[i + 1]) {
        message = message.slice(0, i) + message.slice(i + 2);
        isNotDecrypted = true;
      }
    }
  };

  return message;
}

$form.addEventListener('submit', (event) => {
  event.preventDefault();
  $answer.innerText = aliceDecrypt($form.message.value.trim());
});
