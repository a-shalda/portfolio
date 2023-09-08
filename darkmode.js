const colorSchemeToggle = document.querySelector('.header__left__button');
let projectMockup = document.querySelector('.main__project');
const imageWhite = document.querySelector('.main__project__one__image--white');
const imageBlack = document.querySelector('.main__project__one__image--black');



colorSchemeToggle.addEventListener('pointerdown', () => {
  document.body.classList.toggle('darkmode');
  imageWhite.classList.toggle('main__project__one__image--hidden');

})

const useDark = window.matchMedia("(prefers-color-scheme: dark)");

if (useDark) {
  document.body.classList.toggle('darkmode');
  imageWhite.classList.toggle('main__project__one__image--hidden');
}