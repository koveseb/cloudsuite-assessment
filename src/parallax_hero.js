const hero = document.querySelector('.hero');
const heroText = document.querySelector('.hero_text');

window.addEventListener('scroll', function() {
  let scrollPosition = window.pageYOffset;

  hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
  heroText.style.transform = 'translateX(' + scrollPosition * -1.2 + 'px)';
});