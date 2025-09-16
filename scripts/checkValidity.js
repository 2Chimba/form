function checkValidity(event) {
  const formNode = event.target.form;
  const isValid = formNode.checkValidity();
  formNode.querySelector('button').disabled = !isValid;
}

applicantForm.addEventListener('input', checkValidity)
