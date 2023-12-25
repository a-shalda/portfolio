const colorSchemeToggle = document.querySelector('.header__left__button');
let projectMockup = document.querySelector('.main__project');

colorSchemeToggle.addEventListener('pointerdown', () => {
  document.body.classList.toggle('darkmode');
})

const useDark = window.matchMedia("(prefers-color-scheme: dark)");

if (useDark) {
  document.body.classList.toggle('darkmode');
}