function volumeSphere() {
  let volume; // Define volume
  let radius = document.getElementById('radius').value; // Define radius
  // Calulate volume
  volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(2);
  document.getElementById('volume').value = volume;
  // Prevent form submission
  return false;
}

function finishTask(){

}

document.getElementById('MyForm').onsubmit = volumeSphere;
