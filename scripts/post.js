async function sendData (formData){
  return await fetch('/api/apply/',{
    method: 'POST',
    body: formData,
  })
}
