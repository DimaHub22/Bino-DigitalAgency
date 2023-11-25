import './index.html';
import './styles/style.scss';




let pages = document.getElementById('pages');
let navPages = document.querySelector('.pages');
let svg = document.querySelector('.nav_item span svg')


pages.onclick = function () {
    navPages.classList.toggle('nav_pages');

    if (navPages.classList.contains('nav_pages')) {
        svg.style.transform = 'rotate(180deg)'
    }else{
        svg.style.transform = 'rotate(0deg)'
    }
}

document.addEventListener('click', function (e) {
    let its_menu = e.target === pages || pages.contains(e.target);

    if (!its_menu) {
        navPages.classList.remove('nav_pages');
        svg.style.transform = 'rotate(0deg)'
    }
})