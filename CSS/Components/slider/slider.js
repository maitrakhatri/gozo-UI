var slider = document.getElementById("slider");
var output = document.getElementById("slider-value");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.addEventListener("input", () => output.innerText = slider.value );