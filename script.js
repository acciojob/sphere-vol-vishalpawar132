function volume_sphere() {

  var radius = document.getElementById("radius").value;
	radius = Math.abs(radius);
  var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  document.getElementById("volume").value = volume.toFixed(4);
  return false;
}

window.onload = function() {
  var form = document.getElementById('MyForm');
  form.onsubmit = volume_sphere;
};


