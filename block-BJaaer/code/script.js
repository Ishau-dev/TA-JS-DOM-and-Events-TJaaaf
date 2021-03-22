let form= document.querySelector('form');
let genre= document.querySelectorAll('.radio');
let modal= document.querySelector('.modal');
let userInfo={};
let handleSubmit= (event)=>{
    event.preventDefault();
    userInfo.name= form.elements.name.value;
    userInfo.email= form.elements.email.value;
    userInfo.gender= form.elements.gender.value;
    userInfo.color= form.elements.color.value;
    userInfo.range= form.elements.range.value;
    userInfo.terms= form.elements.terms.value;
    console.log(event);
    let name= document.createElement('h1');
    name.innerText=userInfo.name;
    let email= document.createElement('p');
    email.innerHTML= `Email: ${userInfo.email}`;
    let movie= document.createElement('p');
    movie.innerHTML= `You Love: ${userInfo.gender}`;
    let color= document.createElement('p');
    color.innerHTML= `Color: ${userInfo.color}`;
    let range= document.createElement('p');
    range.innerHTML= `Rating: ${userInfo.range}`;
    let terms= document.createElement('a');
    terms.href="#";
    terms.innerText= `👉🏾 You agree to Terms and Conditions`;
    modal.append(name,email,movie,color,range,terms);

}

form.addEventListener('submit',handleSubmit);