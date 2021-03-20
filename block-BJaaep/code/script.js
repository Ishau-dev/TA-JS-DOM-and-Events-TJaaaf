let box = document.querySelectorAll('.first');
box.forEach((box,index)=>{
    box.addEventListener('click',(event) =>{
        event.target.innerText= index + 1;
        setTimeout(()=>{
            event.target.innerText= ""; 
        },5000)
    });
   
});

let second= document.querySelector('.second');
second.addEventListener('click',(event)=>{
        let val=event.target.dataset.val;
            event.target.innerText=val;
            setTimeout(()=>{
                event.target.innerText= ""; 
            },5000)
    });