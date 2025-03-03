
const questions= document.querySelector('.questions');
const answers= document.querySelector('.questions p');

questions.addEventListener('click', function(){
    answers.styles.display('block');
});