const persInfo = document.querySelector(".personal-information");
const cvTitle = document.querySelector(".cv-title");

cvTitle.addEventListener("click", () => {
  persInfo.classList.toggle("show-block");

  if (persInfo.classList.contains("show-block")) {
    console.log("hi");
  }
});
