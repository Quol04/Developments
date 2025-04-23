

const yesButton= document.getElementById('yes-button');
const noButton= document.getElementById('no-button');

const htmlCounter= document.getElementById('html');
const jsCounter= document.getElementById('js');
const voterName= document.getElementById('voter-name');
const warning= document.getElementById('warning');



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
const finalResults= () => {
    const totalVotes= Number(htmlCounter.innerText) + Number(jsCounter.innerText);
    const htmlPercentage= (Number(htmlCounter.innerText)/totalVotes)*100;
    const jsPercentage= (Number(jsCounter.innerText)/totalVotes)*100;
     if(htmlPercentage>jsPercentage){
        alert(`HTML is the winner with ${htmlPercentage.toFixed(2)}% of the votes!`);
    } else if(jsPercentage>htmlPercentage){
        alert(`JS is the winner with ${jsPercentage.toFixed(2)}% of the votes!`);
    } else{
        alert(`It's a tie! Both HTML and JS have ${htmlPercentage.toFixed(2)}% of the votes!`);
    }

    alert(`HTML: ${htmlPercentage.toFixed(2)}% \n JS: ${jsPercentage.toFixed(2)}%`);
}

finalResults();
