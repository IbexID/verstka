
import './legalide.scss'
const burgerMenu = document.querySelector('.header__nav-burger')
const nav = document.querySelector('.header__nav')
const menu = document.querySelector('ul.header__nav-list')


let isActive = false;
const menuAppearance = () => {
    if(document.body.clientWidth < 867){
    if(!menu.classList.contains('hidden-menu')){
        menu.classList.toggle('hidden-menu');
        nav.style.marginBottom = '0'
        } else {
            menu.classList.toggle('hidden-menu');
        nav.style.marginBottom = '460px'
        }
    }
        
}
if(burgerMenu){
    burgerMenu.addEventListener('click', menuAppearance)
    isActive = true;
} else {
    if(isActive){
        burgerMenu.removeEventListener('click', menuAppearance);
        isActive = false;
    }
}
