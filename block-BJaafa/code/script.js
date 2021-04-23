let btn = document.querySelector('button');
let colorCode = document.querySelector('.color');

let handleClick = ()=>{
    let letters= "123456789ABCDEF";
    let ranNum= "";
    let color= "";
    for(i=0;i<6;i++){
        ranNum=Math.floor(Math.random()*15);
        color= color + letters[ranNum];
    }
    color = "#" + color;
    document.querySelector('body').style.backgroundColor= color;
    colorCode.innerText= color;
}
btn.addEventListener('click',handleClick);
