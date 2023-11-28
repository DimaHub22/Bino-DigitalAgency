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

let portfolioItem = document.querySelectorAll('.portfolio_item')
portfolioItem.forEach(item => {
    item.addEventListener('click', ()=>{
        portfolioItem.forEach(el =>{
            el.classList.remove('portfolio_item_section');
            el.querySelector('.portfolio_item_image').classList.remove('portfolio_image');
            el.querySelector('.portfolio_item_action').classList.remove('portfolio_action')
        })
        item.classList.add('portfolio_item_section')
        item.querySelector('.portfolio_item_image').classList.add('portfolio_image');
        item.querySelector('.portfolio_item_action').classList.add('portfolio_action');
    })

})
