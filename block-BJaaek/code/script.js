let first = document.querySelector('.first');
let second = document.querySelector('.second');
let color= ["#DFFF00","#FFBF00", "#FF7F50"];
first.addEventListener('click',()=>{
    first.style.backgroundColor= color[Math.floor(Math.random() * color.length)];
});

second.addEventListener('mousemove',()=>{
    second.style.backgroundColor= color[Math.floor(Math.random() * color.length)];
});