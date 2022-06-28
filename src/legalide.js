
import './legalide.scss'
const burgerMenu = document.querySelector('.header__nav-burger')
const nav = document.querySelector('.header__nav')
const menu = document.querySelector('ul.header__nav-list')
const width = document.body.clientWidth

if(width < 867 && burgerMenu){
    burgerMenu.addEventListener('click', (()=>{
        console.log(menu.style.display)
        if(!menu.classList.contains('hidden-menu')){
        menu.classList.toggle('hidden-menu');
        nav.style.marginBottom = '0'
        } else {
            menu.classList.toggle('hidden-menu');
        nav.style.marginBottom = '460px'
        }
        }))
}
