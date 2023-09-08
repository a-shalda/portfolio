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

const imageCont = document.querySelector('.main__project__one__image');

imageCont.classList.add('cont_blurred');

const imageContFirst = imageCont.querySelector('.main__project__one__image--black');
const imageContSecond = imageCont.querySelector('.main__project__one__image--white');

imageContFirst.classList.add('img_unloaded');
imageContSecond.classList.add('img_unloaded');

imageContFirst.addEventListener('load', () => {
    imageContFirst.classList.remove('img_unloaded');
    imageCont.classList.remove('cont_blurred');
    console.log('first');
})

imageContSecond.addEventListener('load', () => {
  imageContSecond.classList.remove('img_unloaded');
  imageCont.classList.remove('cont_blurred');
  console.log('second');
})

