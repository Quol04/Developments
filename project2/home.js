// Nav Menu
const navMenu=document.querySelector('.nav__content')
const navMenuOpen=document.querySelector('.open-bar')
const navMenuClose=document.querySelector('.close-bar')

navMenuOpen.addEventListener('click',()=>{
    navMenu.style.display='flex'
    navMenuOpen.style.display='none'
    navMenuClose.style.display='inline-block'
});



// FAQS section 
const faqs = document.querySelectorAll('.questions');
const ans = document.querySelector('.questions p');

faqs.forEach(ans => {
    ans.addEventListener('click', () => {
        ans.classList.toggle("active");
        console.log(ans.classList.toggle("active"));
    });
});






   