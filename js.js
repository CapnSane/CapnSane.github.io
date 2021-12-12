function currentDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;

  var message = `Last Updated on ${today}`;
  document.getElementById('updateFooter').innerHTML = message;
  console.log(message);
}

window.onload = currentDate();
