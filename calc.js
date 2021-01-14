const { divide } = require("mathjs");

function convertUnits() {
  // Get the input values
  V = document.getElementById("inputVelocity").value;
  L = document.getElementById("inputDiameter").value;
  d = document.getElementById("inputDensity").value;
  p = document.getElementById("inputViscosity").value;

  // Velocity units converting
  const veloc = document.getElementById("unitV").value;
  v1 = V / veloc;

  // // Length units converting
  const len = document.getElementById("unitL").value;
  l1 = L / len;

  // // Density units converting
  const den = document.getElementById("unitD").value;
  d1 = d / den;

  // // Viscosity units converting
  const visc = document.getElementById("unitP").value;
  p1 = p / visc;

  // Reynolds number
  const reyNum = ((v1 * l1 * d1) / p1);

  // Print the answer on the website screen
  if (isNaN(reyNum)) {
    let x = document.getElementById("outputRe").innerHTML = "";
  } else {
    let x = document.getElementById("outputRe").innerHTML = (reyNum);
  }

  // Conditional text for the flow (laminar, transition, turbulent)
  // if (reyNum <= 2000) {
  //   const newDiv = document.createElement("div");
  //   const newContent = document.createTextNode(
  //     "Pipe flow is laminar in a pipe of diameter D."
  //     );
  //   newDiv.appendChild(newContent);
  //   const currentDiv = document.getElementById("div1");
  //     document.body.insertBefore(newDiv, currentDiv);
  // } else if (2000 < reyNum < 2900) {
  //   const newDiv = document.createElement("div");
  //   const newContent = document.createTextNode(
  //     "Pipe flow is transitioning to turbulent in a pipe of diameter D."
  //   );
  //   newDiv.appendChild(newContent);
  //   const currentDiv = document.getElementById("div1");
  //   document.body.insertBefore(newDiv, currentDiv);
  // } else {
  //   const newDiv = document.createElement("div");
  //   const newContent = document.createTextNode(
  //     "Pipe flow is fully turbulent in a pipe of diameter D."
  //   );
  //   newDiv.appendChild(newContent);
  //   const currentDiv = document.getElementById("div1");
  //   document.body.insertBefore(newDiv, currentDiv);
  // }
}

// // abaixo de 2000
// Plate flow is still laminar at a distance D from the leading edge.
// Pipe flow is laminar in a pipe of diameter D.

// // acima de 2000
// Plate flow is still laminar at a distance D from the leading edge.
// Pipe flow is transitioning to turbulent in a pipe of diameter D.

// // acima de 2900
// Plate flow is transitioning to turbulent at a distance D from the leading edge.
// Pipe flow is fully turbulent in a pipe of diameter D.