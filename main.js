const block = document.querySelector('.about-myself')
const cvTitle = document.querySelector('.cv-title')


cvTitle.addEventListener('click', function() {
  block.classList.toggle('show-block');
})
console.log(cvTitle)

