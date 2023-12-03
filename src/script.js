import './index.html';
import './styles/style.scss';

import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';

const talk = document.getElementById('talk');
const modal = document.getElementById('modal');
const close = document.getElementById('close');
const form = document.getElementById('form');
const burger = document.getElementById('burger');
const burgerMenu = document.getElementById('burgerMenu');
const burgerNav = document.querySelector('.burger_nav_items');
const closeMenu = document.getElementById('closeMenu');

const pages = document.getElementById('pages');
const navPages = document.querySelector('.pages');
const svg = document.querySelector('.nav_item span svg');

const pagesMob = document.getElementById('pagesMob');
const navPagesMob = document.querySelector('.pages_mob');
const svgMob = document.querySelector('.svg_arrow_mob');
const btnMenuMob = document.querySelectorAll('.nav_modal .nav_item')

const navPagesMobItem = document.querySelectorAll('.pages_mob li');
const talkMob = document.getElementById('talkMob');

const btnSend = document.getElementById('btn-send');
const titleForm = document.getElementById('titleForm');

const button = document.querySelectorAll('.button');
const portfolioView = document.querySelectorAll('.portfolio_view');
const closeView = document.getElementById('closeView');
const modalView = document.querySelector('.modal_view');

closeView.addEventListener('click',()=>{
    modalView.style.display = 'none'
})
portfolioView.forEach(item => {
    item.addEventListener('click', ()=>{
        modalView.style.display = 'flex'
    })
})

button.forEach(item => {
    item.addEventListener('click', ()=>{
        modal.style.display = 'flex'
        form.style.display = "block"
        titleForm.innerHTML = "Ask your question";
    })
})

talkMob.addEventListener('click', () => {
    modal.style.display = 'flex'
    burgerMenu.style.display = 'none'
    form.style.display = "block"
    titleForm.innerHTML = "Ask your question";
})

talk.addEventListener('click', () => {
    modal.style.display = 'flex'
})
btnSend.addEventListener('click', () => {
    form.reset()
    form.style.display = "none"
    titleForm.innerHTML = "Thanks for your question!";
    setTimeout(() => {
        modal.style.display = 'none'
    }, 2000)


})
close.addEventListener('click', () => {
    modal.style.display = 'none'
    form.reset()
})


pages.onclick = function () {
    navPages.classList.toggle('nav_pages');

    if (navPages.classList.contains('nav_pages')) {
        svg.style.transform = 'rotate(180deg)'
    } else {
        svg.style.transform = 'rotate(0deg)'
    }
}

document.addEventListener('click', function (e) {
    let its_menu = e.target === pages || pages.contains(e.target);
    let its_menu_mob = e.target === pagesMob || pagesMob.contains(e.target);

    if (!its_menu && !its_menu_mob) {
        navPages.classList.remove('nav_pages');
        svg.style.transform = 'rotate(0deg)'

        navPagesMob.classList.remove('nav_pages');
        svgMob.style.transform = 'rotate(0deg)'
    }
})

let portfolioItem = document.querySelectorAll('.portfolio_item')
portfolioItem.forEach(item => {
    item.addEventListener('click', () => {
        portfolioItem.forEach(el => {
            el.classList.remove('portfolio_item_section');
            el.querySelector('.portfolio_item_image').classList.remove('portfolio_image');
            el.querySelector('.portfolio_item_action').classList.remove('portfolio_action')
        })
        item.classList.add('portfolio_item_section')
        item.querySelector('.portfolio_item_image').classList.add('portfolio_image');
        item.querySelector('.portfolio_item_action').classList.add('portfolio_action');
    })

})

burger.addEventListener('click', () => {
    burgerMenu.style.display = 'block'
    burgerNav.style.transform = 'translate(0%)'
    getElemMenu()
    closeMob()
})

closeMenu.addEventListener('click', () => {
    burgerMenu.style.display = 'none'
})

pagesMob.onclick = function () {

    navPagesMob.classList.toggle('nav_pages');

    if (navPagesMob.classList.contains('nav_pages')) {
        svgMob.style.transform = 'rotate(180deg)'

    } else {
        svgMob.style.transform = 'rotate(0deg)'
    }
}

function getElemMenu() {
    pagesMob.classList.add('not_hidden')
    btnMenuMob.forEach(item => {
        item.addEventListener('click', (e) => {
            item.classList.contains('not_hidden') ? burgerMenu.style.display = 'block' : burgerMenu.style.display = 'none'
        })
    })
}


function closeMob() {
    navPagesMobItem.forEach(item => {
        item.addEventListener('click', () => {
            pagesMob.classList.remove('not_hidden')
        })
    })
}


const swipe = new Swiper('.swiper', {
    modules: [Navigation, Pagination],

    // Optional parameters
    direction: 'vertical',
    loop: true,
    slidesPerView: 'auto',
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    spaceBetween: 0
});

