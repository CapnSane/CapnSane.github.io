const {
  divide,
  and
} = require("mathjs");
document.body.onload = addElement;

function convertUnits() {
  // Get the input values
  V = document.getElementById("inputVelocity").value;
  L = document.getElementById("inputDiameter").value;
  d = document.getElementById("inputDensity").value;
  p = document.getElementById("inputViscosity").value;

  // Velocity units converting
  const veloc = document.getElementById("unitV").value;
  v1 = V / veloc;

  // Length units converting
  const len = document.getElementById("unitL").value;
  l1 = L / len;

  // Density units converting
  const den = document.getElementById("unitD").value;
  d1 = d / den;

  // Viscosity units converting
  const visc = document.getElementById("unitP").value;
  p1 = p / visc;

  // Reynolds number
  const reyNum = ((v1 * l1 * d1) / p1);

  // Print the answer on the website screen
  if (isNaN(reyNum)) {
    let x = document.getElementById("outputRe").innerHTML = "";
  } else if (reyNum == Infinity) {
    let x = document.getElementById("outputRe").innerHTML = "";
  } else if ((v1 * l1 * d1) == 0) {
    let x = document.getElementById("outputRe").innerHTML = "";
  } else {
    let x = document.getElementById("outputRe").innerHTML = (reyNum);
  }

  // Conditional text for the flow (laminar, transition, critical, turbulent)
  let text1 = "Pipe flow is laminar in a pipe of diameter D.";
  let text2 = "Pipe flow is transitioning to turbulent in a pipe of diameter D.";
  let text3 = "Pipe flow is critical in a pipe of diameter D.";
  let text4 = "Pipe flow is fully turbulent in a pipe of diameter D.";
  if (reyNum == 0) {
    document.getElementById("flow").innerHTML = "";

  } else if (reyNum <= 2000) {
    document.getElementById("flow").innerHTML = text1.fontcolor("#005eff");

  } else if (reyNum <= 2900 && reyNum < 4000) {
    document.getElementById("flow").innerHTML = text2.fontcolor("#ffeb51");;

  } else if (reyNum <= 4000) {
    document.getElementById("flow").innerHTML = text3.fontcolor("#ff6251");;

  } else if (reyNum > 4000 && reyNum != Infinity) {
    document.getElementById("flow").innerHTML = text4.fontcolor("#e61700");;

  } else if (isNaN(reyNum)) {
    document.getElementById("flow").innerHTML = "";

  } else if (reyNum == Infinity) {
    document.getElementById("flow").innerHTML = "";
  }

}