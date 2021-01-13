function reynoldsCalc() {

  V = document.getElementById("inputVelocity").value;
  L = document.getElementById("inputDiameter").value;
  d = document.getElementById("inputDensity").value;
  p = document.getElementById("inputViscosity").value;
  // console.log("V = ", V, "\nL = ", L, "\nd = ", d, "\np = ", p);
   // m/s cm/s ft/s mph in/s
   // m in ft cm nm
   // kg/m^3 lb/in^3 kg/l
   // cP Pa-s kb/m-s slug/ft-s
  
  
  document.getElementById("outputRe").innerHTML=(V*L*d)/p;
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