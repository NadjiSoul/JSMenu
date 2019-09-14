var btn = document.querySelector('.toggle_btn');
var nav = document.querySelector('.twonav');
var navbar = document.querySelector('.navbar');

btn.onclick = function(){
  nav.classList.toggle('twonav_open');
  btn.classList.toggle('cross');
  navbar.classList.toggle('barnav');
}