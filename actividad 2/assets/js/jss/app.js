//  Menu Desplegable 
const menuBtn = document.querySelector('#menu-btn');
const menuClose = document.querySelector('#menu-close');
const nav = document.querySelector('nav .navigation ul')

menuBtn.onclick = () => nav.classList.add('active')
menuClose.onclick = () => nav.classList.remove('active')

