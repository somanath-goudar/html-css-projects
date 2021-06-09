const menu = document.querySelector('#menu');
console.log(menu);

const sidebar = document.querySelector('.sidebar');

menu.addEventListener('click', function () {
  sidebar.classList.toggle('show-sidebar');
});
