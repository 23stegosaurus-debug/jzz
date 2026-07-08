document.getElementById('year').textContent = new Date().getFullYear();

const easterEgg = document.getElementById('ctrl-z-easter-egg');

if (easterEgg) {
  document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key.toLowerCase() === 'z') {
      event.preventDefault();
      event.stopPropagation();
      easterEgg.classList.add('is-visible');
    }
  });
}
