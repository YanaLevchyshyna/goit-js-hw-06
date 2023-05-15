const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  console.dir(formElements);

  const email = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    email,
    password,
  };

  if (this.email.value === '' || this.password.value === '') {
    return alert('Please fill in all the fields!');
  }
  console.log(formData);

  event.currentTarget.reset();
}
