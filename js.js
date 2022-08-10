function currentDate() {
  fetch('date.txt')
    .then((response) => response.text())
    .then((data) => {
      var message = `Last Update on ${data}`;
      document.getElementById('updateFooter').innerHTML = message;
    });
}

window.onload = currentDate();
