let plusIcon = document.querySelectorAll('.practice-content__tab-plus-icon');
let tabContent = document.querySelectorAll('.practice-content__tab-content');
let revTabPoint = document.querySelectorAll('.reviews-content__more-info');
let revTab = document.querySelectorAll('.rev-tab');
let moreRevsBtn = document.querySelector('.reviews-content__more-reviews');
let hiddenRevs = document.querySelectorAll('.reviews-content__hidden-reviews');

console.log(revTab);
console.log(revTabPoint);

console.log(moreRevsBtn);
console.log(hiddenRevs);

for(let i=0; i<plusIcon.length; i++) {
    plusIcon[i].addEventListener("click", function(e) {
        tabContent[i].classList.toggle('practice-content__tab-content_active');
        plusIcon[i].classList.toggle('practice-content__tab-plus-icon_active');
        e.preventDefault();
    })
    
}

for(let i=0; i<revTabPoint.length; i++) {
    revTabPoint[i].addEventListener("click", function(e) {
        revTabPoint[i].animate([
            {opacity: '0'},
            
            
        ],
        {   duration: 400,
            iterations: 1
        })
        
        
        setTimeout(() => {
            revTabPoint[i].classList.add('rev-link-hide');
            
            revTab[i].classList.toggle('rev-tab-show');
        }, 420);
        e.preventDefault();
    })
    
}
moreRevsBtn.addEventListener("click", function(e) {
    moreRevsBtn.animate([
        {opacity: '0'},
        
        
    ],
    {   duration: 400,
        iterations: 1
    })
    
    
    setTimeout(() => {
        moreRevsBtn.classList.add('more-revs-hide');
        for(let i=0; i<hiddenRevs.length; i++) {
            hiddenRevs[i].classList.add('reviews-content__hidden-reviews_show');
    
        };
    }, 420);
    
    e.preventDefault();
})