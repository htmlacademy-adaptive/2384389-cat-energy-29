let navMain = document.querySelector('.navigation');
let navToggle = document.querySelector('.main-header__navigation-toggle');

navMain.classList.remove('navigation--nojs');
navToggle.classList.remove ('main-header__navigation-toggle--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('navigation--closed')) {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');

  } else {
    navMain.classList.add('navigation--closed');
    navMain.classList.remove('navigation--opened');
  }



  if (navToggle.classList.contains('main-header__navigation-toggle--closed')) {
    navToggle.classList.remove('main-header__navigation-toggle--closed');
    navToggle.classList.add('main-header__navigation-toggle--opened');

  } else {
    navToggle.classList.add('main-header__navigation-toggle--closed');
    navToggle.classList.remove('main-header__navigation-toggle--opened');
  }
});
