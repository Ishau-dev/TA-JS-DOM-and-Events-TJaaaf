let first = document.querySelector('.first');
let second = document.querySelector('.second');
let color= ["#DFFF00","#FFBF00", "#FF7F50"];
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

let handleclick = ()=>{
    let color = generateColor();
    first.style.backgroundColor= color;
}
let handleMove = ()=>{
    let color = generateColor();
    second.style.backgroundColor= color;
}
first.addEventListener('click',handleclick);

second.addEventListener('mousemove',handleMove);