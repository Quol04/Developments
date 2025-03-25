
// const questions= document.querySelectorAll('.questions');

// questions.forEach(question =>{
//     question.addEventListener('click', () => {
//         question.style.display='block';
//         if(question.classList.contains('block')){
//             faq.style.display= 'block';
//         }else{
//             faq.style.display= 'none';
//         }
//     })
// });


const faqs = document.querySelectorAll('.questions');
const ans = document.querySelector('.questions p');

faqs.forEach(ans => {
    ans.addEventListener('click', () => {
       
        ans.style.display='block';
        // ans.style.display = 'none';
        // console.log(ans.children[1].classList);
        // console.log(faqs[0]);
        // console.log(question.nextElementSibling);
        // Toggle FAQ visibility
        // if (ans.style.display === 'none') {
        //     ans.style.display = 'block';
        // } else {
        //     ans.style.display = 'none';
        // }
    });
});





   