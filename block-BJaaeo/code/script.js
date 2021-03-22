
let result= document.querySelector('.result')
let data= document.querySelectorAll('button');
let initial=0;


function btnClick(event){

if(event.target.classList.contains('green')){
   result.innerText = eval(result.innerText);
   return;
}


if(event.target.classList.contains("reset")){
    
    result.innerText=initial;
    return;
}
if(result.innerText== initial){
    result.innerText= event.target.innerText;
}
else
result.innerText+=event.target.innerText;
}
data.forEach(btn=>btn.addEventListener('click',btnClick));

result.innerText=initial;