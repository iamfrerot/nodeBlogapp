document.addEventListener('DOMContentLoaded', function () {
 const allButtons = document.querySelectorAll('.searchBtn');
 const searchBar = document.querySelector('.searchBar');
 const searchInput = document.querySelector('#searchInput');
 const searchClose = document.querySelector('#searchClose');

 allButtons.forEach(button => {
  button.addEventListener('click', function () {
   searchBar.style.visibility = 'visible';
   searchBar.classList.add('open');
   this.setAttribute('aria-expanded', 'true');
   searchInput.focus();
  });

  searchClose.addEventListener('click', function () {
   searchBar.style.visibility = 'hidden';
   searchBar.classList.remove('open');
   this.setAttribute('aria-expanded', 'false');
   searchInput.blur();
  });
 });
});