const menu = document.querySelector('#menu');
console.log(menu);

const sidebar = document.querySelector('.sidebar');

menu.addEventListener('click', function () {
  sidebar.classList.toggle('show-sidebar');
});

const YtReload = document.querySelector('#yt-btn');
console.log(YtReload);

YtReload.addEventListener('click', function () {
  location.reload(false);
});