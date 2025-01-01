function getFormValue(event) {
  event.preventDefault();
  const firstName = document.getElementsByName("fname")[0].value;
  console.log(firstName);

  const lastName = document.getElementsByName("lname")[0].value;
  console.log(lastName);
}
