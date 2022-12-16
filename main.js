const block = document.querySelector('.personal-information')
const cvTitle = document.querySelector('.cv-title')


cvTitle.addEventListener('click', function() {
  block.classList.toggle('show-block');
})
console.log(cvTitle)

