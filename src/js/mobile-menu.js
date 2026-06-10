const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');

const linksEl = document.querySelectorAll('[data-link]');

openBtnEl.addEventListener('click', e => {
  burgerMenuEl.dataset.visible = 'open';
});

closeBtnEl.addEventListener('click', e => {
  burgerMenuEl.dataset.visible = 'close';
});

linksEl.forEach(link => {
  link.addEventListener('click', () => {
    burgerMenuEl.dataset.visible = 'close';
  });
});
