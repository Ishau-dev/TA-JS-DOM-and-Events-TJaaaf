let player = document.querySelectorAll('.optn1');
let computer = document.querySelectorAll('.optn2');
let result = document.querySelector('.result');
let result2 = document.querySelector('.result2');
let won = document.querySelector('.won');
let count= document.querySelector('.counter');
let count2= document.querySelector('.counterCom');
let reset= document.querySelector('.refresh');
count.innerText=0;
count2.innerText=0;
let playerClick= (event)=>{
    
    result.innerText= event.target.dataset.name;
    let index = Math.floor(Math.random()*3);
    result2.innerText=computer[index].dataset.name;
    if(result.innerText == result2.innerText){
        won.innerText= "Tie";
    }else if(result.innerText == "Scissors" && result2.innerText == "Paper"){
        won.innerText="Won";
        count.innerText++;
    }else if(result.innerText == "Paper" && result2.innerText == "Rock"){
        won.innerText="Won";
        count.innerText++;
    }else if(result.innerText == "Rock" && result2.innerText == "Scissors"){
        won.innerText="Won";
        count.innerText++;
    }else{
        won.innerText="lose";
        count2.innerText++;
    }

}
player.forEach(btn=> btn.addEventListener('click', playerClick));


reset.addEventListener('click',()=>{
    result.innerText="";
    result2.innerText="";
    count.innerText=0;
    count2.innerText=0;
    won.innerText="";
})
