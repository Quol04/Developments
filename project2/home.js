


const faqs = document.querySelectorAll('.questions');
const ans = document.querySelector('.questions p');

faqs.forEach(ans => {
    ans.addEventListener('click', () => {
        ans.classList.toggle("active");
        console.log(ans.classList.toggle("active"));
    });
});





   