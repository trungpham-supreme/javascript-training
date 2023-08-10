function volumeSphere() {
  let volume; // Define volume
  let radius = document.getElementById('radius').value; // Define radius
  // Set attribute type number for input radius
  document.getElementById('radius').setAttribute('type', 'number');
  // Calulate volume
  volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(2);
  document.getElementById('volume').readOnly = true;
  document.getElementById('volume').value = volume;
  // Prevent form submission
  return false;
}

document.getElementById('MyForm').onsubmit = volumeSphere;
