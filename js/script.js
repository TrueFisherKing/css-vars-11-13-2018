const root = document.querySelector(":root");
const swatches = root.querySelectorAll(".swatches span");

swatches.forEach(swatch => {
  swatch.addEventListener("click", e => {
    console.log(e.target.style.backgroundColor);
    root.style.setProperty("--primary-color", e.target.style.backgroundColor);
  });
});
