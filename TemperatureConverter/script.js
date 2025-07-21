function convertTemp() {
  const temp = parseFloat(document.getElementById('tempInput').value);
  const selectedUnit = document.querySelector('input[name="unit"]:checked').value;
  const resultArea = document.getElementById('resultArea');

  if (isNaN(temp)) {
    resultArea.textContent = "Please enter a valid number!";
    return;
  }

  let c, f, k;

  if (selectedUnit === 'C') {
    c = temp;
    f = (c * 9 / 5) + 32;
    k = c + 273.15;
  } else if (selectedUnit === 'F') {
    f = temp;
    c = (f - 32) * 5 / 9;
    k = c + 273.15;
  } else if (selectedUnit === 'K') {
    k = temp;
    c = k - 273.15;
    f = (c * 9 / 5) + 32;
  }

  resultArea.innerHTML = `
    <strong>Converted Values:</strong><br>
    Celsius: ${c.toFixed(2)} °C<br>
    Fahrenheit: ${f.toFixed(2)} °F<br>
    Kelvin: ${k.toFixed(2)} K
  `;
}
