function getFormvalue() {
  event.preventDefault()
  let data = document.getElementById("form1");
  for (let index = 0; index < data.length; index++) {
    if (data.elements[index].value != "Submit") {
      console.log(data.elements[index].value);
    }
  }
}