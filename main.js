const persInfo = document.querySelector(".personal-information");
const cvTitle = document.querySelector(".cv-title");
const phoneIcon = document.querySelector(".phone-icon");

cvTitle.addEventListener("click", () => {
  persInfo.classList.toggle("show-block");

  if (persInfo.classList.contains("show-block")) {
    phoneIcon.classList.add("phone-animation");
  } else {
    phoneIcon.classList.remove("phone-animation");
  }
});

setTimeout(function () {
  phoneIcon.style.animation = "moving .5s infinite";
}, 5000);
