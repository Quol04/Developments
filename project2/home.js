
const questions= document.querySelectorAll('.questions');
const answers= document.querySelectorAll('.questions p');

questions.addEventListener('click',()=> {
    if(answers.style.display==='none'){
        answers.style.display='block';
        answers.style.color='red';
        answers.style.fontWeight='bold';
    }else{
        answers.style.display='none';
    }
   
});