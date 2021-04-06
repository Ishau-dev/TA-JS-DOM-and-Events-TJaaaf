/* <div class="flex-20">
<img src="./assets/question.gif" alt="">
</div> */
let boxes = document.querySelector('.boxes');

// let generateBox = ()=>{
//     for(let i=0; i<24; i++){
//         let div = document.createElement('div');
//         div.classList.add('flex-20');
//         let img = document.createElement('img');
//         img.src = './assets/question.gif';
//         div.append(img);
//         boxes.append(div);
//     }
// }
// generateBox();

let imageArr = ["1up.png","blueshell.png","bobomb.png","bulletbill.png","coin.png","goomba.png","logo.png","luigi.png","mario.png","mushroom.png","peach.png","star.png","thwomp.png","wario.png"];

let icons = () =>{
    for(let i=0; i<24; i++){
    
        let div = document.createElement('div');
        div.classList.add('flex-20');
        let img = document.createElement('img'); 
        img.src = './assets/question.gif'
        // image= './assets/' + imageArr[Math.floor(Math.random()*14)];
        // img.style.backgroundImage= `url(${image})`;
        div.append(img);
        boxes.append(div);
}
}

icons();
