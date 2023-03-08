const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const showMobileMenu = document.getElementById('mobile-menu');

btn.addEventListener('click', navToggle);

function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  document.body.classList.toggle('stop-scrolling');
  showMobileMenu.classList.toggle('show-mobile-menu');
}

const projectBtn = Array.from(
  document.querySelectorAll('.projects-category > div')
);
const projectItem = Array.from(
  document.querySelectorAll('.project-item-container .projects-cards')
);

projectBtn.forEach((btn) => {
  btn.addEventListener('click', function () {
    projectItem.forEach((item) => {
      item.classList.add('no-show');
    });
    projectBtn.forEach((item) => {
      item.classList.remove('active');
    });
    let index = projectBtn.indexOf(this);
    projectItem[index].classList.remove('no-show');
    btn.classList.add('active');
  });
});
