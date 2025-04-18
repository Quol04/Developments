
//variables declaration
const navlinks=document.querySelector('.nav__menu')
const navMenuOpen=document.querySelector('#open-menu')
const navMenuClose=document.querySelector('#close-menu')
const navMenuItem=document.querySelectorAll('.nav__menu a')


//if the user clicks navlinks <a> tag then close the menu
//open the menu when the hamburger icon is clicked
navMenuOpen.addEventListener('click',()=>{
    navlinks.style.display='flex'
    navMenuOpen.style.display='none'
    navMenuClose.style.display='inline-block'
    
    navMenuItem.forEach(item => {
      item.addEventListener('click', () => {
        navlinks.style.display = 'none';          // Hide the menu
        navMenuOpen.style.display = 'inline-block'; // Show the hamburger icon
        navMenuClose.style.display = 'none';      // Hide the close icon
      });
    });
   
})
//close the menu when the close icon is clicked

navMenuClose.addEventListener('click',()=>{
    navlinks.style.display='none'
    navMenuOpen.style.display='inline-block'
    navMenuClose.style.display='none'
})


// Frequently asked questions
//display the faqAnswer section when clicked the faqQuestion section
//hide the faqAnswer section when clicked the faqQuestion section again
//change the icon of the faqQuestion section to up when clicked and vice versa
const faqQuestion=document.querySelector('.question_head');
const faqAnswer=document.querySelector('.questions p');

faqQuestion.addEventListener('click',()=>{
    if(faqAnswer.style.display==='none' ){
        faqAnswer.style.display='inline-block'
        // faqQuestion.classList.add('uil-angle-up')
        // faqQuestion.classList.remove('uil-angle-down')
    }else{
        faqAnswer.style.display='none'
        // faqQuestion.classList.add('uil-angle-down')
        // faqQuestion.classList.remove('uil-angle-up')
        
    }
});







   