

const yesButton= document.getElementById('yes-button');
const noButton= document.getElementById('no-button');

const htmlCounter= document.getElementById('html');
const jsCounter= document.getElementById('js');
const voterName= document.getElementById('voter-name');
const warning= document.getElementById('warning');

const finalResultBtn= document.querySelector('.results');
const finalResult= document.querySelector('#final');




let voters=[];

yesButton.addEventListener('click', ()=>{
    voteTracker(jsCounter);
    
});

noButton.addEventListener('click', ()=>{
    voteTracker(htmlCounter);

})

const voteTracker= (countElement) => {
    if(voterName.value !=="" ){
    if(!voters.includes(voterName.value)){
        voters.push(voterName.value);
        voterName.value="";
        countElement.innerText= Number(countElement.innerText) +1;
        warning.classList.add('hidden');

        
    }else{
        warning.classList.remove('hidden');
        voterName.value="";
    }
}
}

const showResults= () => {
   const jsCounterNum=jsCounter.innerText;
   const htmlCounterNum= htmlCounter.innerText;

    if ( jsCounterNum >  htmlCounterNum){
        finalResult.innerText= `JavaScript is the winner with ${jsCounterNum} votes`;
        
    }
    else if ( jsCounterNum < htmlCounterNum){
        finalResult.innerText= `HTML is the winner with ${htmlCounterNum} votes`;
    } else{
        finalResult.innerText= `It's a tie with ${htmlCounterNum} votes each`;
    }
}

finalResultBtn.addEventListener('click', showResults);
const resetPoll= () => {
    jsCounter.innerText=0;
    htmlCounter.innerText=0;
    finalResult.innerText="";
    voters=[];
    warning.classList.add('hidden');
}