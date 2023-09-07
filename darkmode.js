const colorSchemeToggle = document.querySelector('.header__left__button');

colorSchemeToggle.addEventListener('pointerdown', () => {
  document.body.classList.toggle('darkmode');
})

const useDark = window.matchMedia("(prefers-color-scheme: dark)");

if (useDark) {
  document.body.classList.toggle('darkmode');
}