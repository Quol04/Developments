
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
//toggle the FAQ section when clicked
const faqs=document.querySelectorAll('.question_head')
const faqAnswers=document.querySelectorAll('.question p')

// if the user clicks the faqs section then show the faqAnswers
// and change the icon from down arrow to up arrow
// and vice versa
faqs.forEach(faq => {
    faq.addEventListener('click',() =>{
        faqAnswers.forEach(answer => {
            answer.style.display='block'
        })
        faqAnswers[Array.from(faqs).indexOf(faq)].style.display='block'
        faq.querySelector('i').classList.toggle('uil-angle-up')
        faq.querySelector('i').classList.toggle('uil-angle-down')
    })
})

// faqs.forEach(faq => {
//     faq.addEventListener('click',() =>{
//         faq.style.display='block'
//         if(faq.classList.contains('show')){
//             faq.querySelector('i').className= 'uil uil-angle-up'
//         }else{

//              faq.querySelector('i').className= 'uil uil-angle-down'
//         }
//     })
// })





   