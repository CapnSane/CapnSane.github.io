function convertUnits() {
  // Get the input values
  V = document.getElementById("inputVelocity").value;
  L = document.getElementById("inputDiameter").value;
  d = document.getElementById("inputDensity").value;
  p = document.getElementById("inputViscosity").value;

  // Velocity units converting
  var veloc = document.getElementById("unitV").value;
  v1 = V / veloc;

  // // Length units converting
  var len = document.getElementById("unitL").value;
  l1 = L / len;

  // // Density units converting
  var den = document.getElementById("unitD").value;
  d1 = d / den;

  // // Viscosity units converting
  var visc = document.getElementById("unitP").value;
  p1 = p / visc;

  // Print the answer on the website screen
  document.getElementById("outputRe").innerHTML = ((v1 * l1 * d1) / p1);

}

// // abaixo de 2000
// Plate flow is still laminar at a distance D from the leading edge.
// Pipe flow is laminar in a pipe of diameter D.

// // acima de 2000
// Plate flow is still laminar at a distance D from the leading edge.
// Pipe flow is transitioning to turbulent in a pipe of diameter D.

// // acima de 10000
// Plate flow is transitioning to turbulent at a distance D from the leading edge.
// Pipe flow is fully turbulent in a pipe of diameter D.