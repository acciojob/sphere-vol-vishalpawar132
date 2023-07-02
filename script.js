function volume_sphere() {
  // Retrieve the input value from the Radius field
  var radius = document.getElementById("radius").value;

  // Calculate the volume of the sphere
  var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display the calculated volume in the Volume field
  document.getElementById("volume").value = volume.toFixed(2);

  // Prevent form submission
  return false;
}

window.onload = function() {
  // Get the form element
  var form = document.getElementById('MyForm');

  // Assign the volume_sphere function to the form's onsubmit event
  form.onsubmit = volume_sphere;
};


