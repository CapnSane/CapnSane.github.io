function currentDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;

  var message = `Last Updated on ${today}`;
  document.getElementById('updateFooter').innerHTML = message;

  // fetch('date.txt')
  //   .then((response) => response.text())
  //   .then((data) => {
  //     // Do something with your data
  //     var message = `Last Updated on ${data}`;
  //     document.getElementById('updateFooter').innerHTML = message;
  //   });
}

window.onload = currentDate();
