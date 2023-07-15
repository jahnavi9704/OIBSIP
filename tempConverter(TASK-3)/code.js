function tempConversion() {
  document.getElementById("output1").style.visibility = "visible";
  document.getElementById("output2").style.visibility = "visible";
  var temperature = parseFloat(document.getElementById("temp").value);
  var tempSelected = document.getElementById("tempSelected").value;
  switch (tempSelected) {
    case "Celsius":
      Celsius(temperature);
      break;
    case "Fahrenheit":
      Fahrenheit(temperature);
      break;
    case "Kelvin":
      Kelvin(temperature);
      break;
    default:
      alert("select an option");
  }
}
function Celsius(x) {
  var output1 = ((9 / 5) * x + 32).toFixed(5) + " F";
  var output2 = (273.15 + x).toFixed(5) + " K";
  document.getElementById("output1").innerHTML = output1;
  document.getElementById("output2").innerHTML = output2;
}
function Fahrenheit(x) {
  var output1 = ((x - 32) * (5 / 9)).toFixed(5) + " C";
  var output2 = ((x - 32) * (5 / 9) + 273.15).toFixed(5) + " K";
  document.getElementById("output1").innerHTML = output1;
  document.getElementById("output2").innerHTML = output2;
}
function Kelvin(x) {
  var output1 = (x - 273.15).toFixed(5) + " C";
  var output2 = (((x - 273.15) * 9) / 5 + 32).toFixed(5) + " F";

  document.getElementById("output1").innerHTML = output1;
  document.getElementById("output2").innerHTML = output2;
}
