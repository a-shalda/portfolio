const colorSchemeToggle = document.querySelector('.header__left__button');
let projectMockup = document.querySelector('.project_one__image');

colorSchemeToggle.addEventListener('pointerdown', () => {
  document.body.classList.toggle('darkmode');

  if (projectMockup.src === 'https://a-shalda.github.io/portfolio/images/white.jpg') {
    document.querySelector('.project_one__image').src = 'https://a-shalda.github.io/portfolio/images/black.jpg';
  }
  else {
    document.querySelector('.project_one__image').src = 'https://a-shalda.github.io/portfolio/images/white.jpg';
  }
})

const useDark = window.matchMedia("(prefers-color-scheme: dark)");



if (useDark) {
  document.body.classList.toggle('darkmode');
  document.querySelector('.project_one__image').src = 'https://a-shalda.github.io/portfolio/images/black.jpg';
}