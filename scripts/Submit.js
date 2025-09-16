function serializeForm(formNode) {
  return new FormData(formNode)
}

function handleFormSubmit(event) {
  event.preventDefault()
  const formData = serializeForm(applicantForm);
  console.log('--- Данные из FormData ---');
  for (const [key, value] of formData) {
    console.log(`${key}: ${value}`);
  }
  console.log('------------------------');
}

const applicantForm = document.getElementById('job')
applicantForm.addEventListener('submit', handleFormSubmit)
