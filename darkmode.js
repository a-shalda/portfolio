const colorSchemeToggle = document.querySelector('.header__left__button');
let projectMockup = document.querySelector('.project_one__image');

colorSchemeToggle.addEventListener('pointerdown', () => {
  document.body.classList.toggle('darkmode');
  if (projectMockup === 'images/white.jpg') {
    console.log('hey');
    // document.querySelector('.project_one__image').src = 'images/black.jpg';
  }
  // else {
  //   console.log('hey');

  //   document.querySelector('.project_one__image').src = 'images/black.jpg';
  // }
})

const useDark = window.matchMedia("(prefers-color-scheme: dark)");


if (projectMockup.src === 'images/white.jpg') {
  console.log('hey');
  // document.querySelector('.project_one__image').src = 'images/black.jpg';
}

console.log(projectMockup.src);