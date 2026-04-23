const hamMenu = document.querySelector('.ham-menu');

const offScreen = document.querySelector('.offscreen');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreen.classList.toggle('active');
})