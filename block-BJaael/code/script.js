let generateColor= ()=>{
    let hexchar=[
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f"
    ];
    let color = "#";
    for(let i=0; i<6; i++){
        let randomNum= Math.floor(Math.random() * hexchar.length)
        color = color + hexchar[randomNum];
    }
    return color;
}

let boxes = document.querySelector('.boxes');
for(let i=0; i<500; i++){
    let div= document.createElement('div');
    div.classList.add('box');
    
    let h1= document.createElement('h1');
    h1.innerText= Math.floor(Math.random() * 500);
    div.append(h1);
    boxes.append(div);
}
let boxer= document.querySelectorAll('.box');

function handleMouse(){
    
    boxer.forEach(box=>box.style.backgroundColor= generateColor());
}

boxer.forEach(box => box.addEventListener('mouseover',handleMouse));
    