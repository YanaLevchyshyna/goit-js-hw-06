const inputEl = document.getElementById('validation-input');

inputEl.addEventListener('blur', (event) => {
  let dataLength = inputEl.getAttribute('data-length');
  let eventLength = event.currentTarget.value.length;
  if (dataLength > eventLength || dataLength < eventLength) {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  } else {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  }
});
