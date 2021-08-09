let firstArrow = document.querySelector('.burger-topmenu-line-first');
let secondArrow = document.querySelector('.burger-topmenu-line-second');
let thirdArrow = document.querySelector('.burger-topmenu-line-three');
let burgerItem = document.querySelector('.burger-topmenu');
let menu = document.querySelector('.topmenu');

burgerItem.addEventListener("click", function(e) {
    firstArrow.classList.toggle('active-first-line');
    secondArrow.classList.toggle('active-second-line');
    thirdArrow.classList.toggle('active-three-line');
    burgerItem.classList.toggle('active-burger-topmenu');
    menu.classList.toggle('topmenu-active');
    
    
    
})