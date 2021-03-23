let form= document.querySelector('form');
let genre= document.querySelectorAll('.radio');
let content= document.querySelector('.modal-content');
// let close= document.querySelector('.close');
let modal = document.querySelector('.modal');
let userInfo={};
let handleSubmit= (event)=>{
    content.innerText="";
    event.preventDefault();
    userInfo.name= form.elements.name.value;
    userInfo.email= form.elements.email.value;
    userInfo.gender= form.elements.gender.value;
    userInfo.color= form.elements.color.value;
    userInfo.range= form.elements.range.value;
    userInfo.book= form.elements.drone.value;
    userInfo.terms= form.elements.terms.checked;
    let close= document.createElement('button');
    close.classList.add('close');
    close.innerText="Close";
    let name= document.createElement('h2');
    name.innerText=userInfo.name;
    let email= document.createElement('p');
    email.innerHTML= `Email: ${userInfo.email}`;
    let movie= document.createElement('p');
    movie.innerHTML= `You Love: ${userInfo.gender}`;
    let color= document.createElement('p');
    color.innerHTML= `Color: ${userInfo.color}`;
    let range= document.createElement('p');
    range.innerHTML= `Rating: ${userInfo.range}`;
    let book= document.createElement('p');
    book.innerText=`Book Genre: ${userInfo.book}`;
    let terms= document.createElement('p');
        terms.innerText= `👉🏾: ${userInfo.terms? "You agree to Terms and Conditions": "You didn't agree"}`;
    
    content.append(close,name,email,movie,color,range,book,terms);
    modal.append(content);
    modal.classList.add('open');

    close.addEventListener('click',()=>{
        modal.classList.remove('open');
        
        
    });
    
}

form.addEventListener('submit',handleSubmit);

