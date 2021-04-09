import createNav from './nav.js';
import loadHome from './home.js';
import loadMenu from './menu';
import loadAbout from './about';

init();
addEvenNav();

function addEvenNav(){
    const navHome = document.querySelector('.header__home');
    navHome.addEventListener('click', () =>{
        loadHome();
    })
    
    const navMenu = document.querySelector('.header__menu');
    navMenu.addEventListener('click', () =>{
        loadMenu();
    })

    const navAbout = document.querySelector('.header__about');
    navAbout.addEventListener('click', () =>{
        loadAbout();
    })
}
function init(){
    createNav();
    loadHome();
}

