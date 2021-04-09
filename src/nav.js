function createNav () {
    const nav = document.createElement('ul')
    document.querySelector('#header').appendChild(nav);
    nav.classList.add('header__group');

    const navHome = document.createElement('li');
    navHome.classList.add('header__home')
    nav.appendChild(navHome);
    navHome.innerText = "Home";

    const navMenu = document.createElement('li');
    nav.appendChild(navMenu);
    navMenu.classList.add('header__menu')
    navMenu.innerText = "Menu";

    const navAbout = document.createElement('li');
    nav.appendChild(navAbout);
    navAbout.classList.add('header__about')
    navAbout.innerText = "About";


}

export default {createNav};