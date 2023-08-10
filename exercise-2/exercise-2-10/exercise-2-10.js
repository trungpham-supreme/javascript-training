function volumeSphere() {
  let volume; // Define volume
  let radius = document.getElementById('radius').value; // Define radius
  radius = parseInt(radius);
  // Calulate volume
  volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(2);
  document.getElementById('volume').value = volume;
  // Prevent form submission
  return false;
}

document.getElementById('MyForm').onsubmit = volumeSphere;
