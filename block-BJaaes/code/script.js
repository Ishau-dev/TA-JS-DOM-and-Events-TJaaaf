let form = document.querySelector('form');
let errorMessage={};

let handleSubmit =(event)=>{
    event.preventDefault();
    let elements = event.target.elements;
    
    let userName= elements.user;
    let name= elements.name;
    let email= elements.email;
    let phone= elements.phone;
    let password= elements.password;
    let confirm= elements.confirm;
    //userName VALIDATION
    if(userName.value.length < 4){
        errorMsg= `${userName.value} can't be less than 4 characters`;
        userName.nextElementSibling.innerText= errorMsg;
        userName.classList.remove('success');
        userName.classList.add('error');
    }else{
        userName.nextElementSibling.innerText= "";
        userName.classList.remove('error');
        userName.classList.add('success');
    }
    //name Validation
    if(!isNaN(name.value)){
        errorMsg= `${name.value} can't be number`;
        name.nextElementSibling.innerText= errorMsg;
        name.classList.remove('success');
        name.classList.add('error');
    }else{
        name.nextElementSibling.innerText= "";
        name.classList.remove('error');
        name.classList.add('success');
    }
    //email
    if(email.value.includes('@') || email.value.length < 6){
        errorMsg= `not valid`;
        email.nextElementSibling.innerText= errorMsg;
        email.classList.remove('success');
        email.classList.add('error');
    }else{
        email.nextElementSibling.innerText= "";
        email.classList.remove('error');
        email.classList.add('success');
    }

    if(isNaN(phone.value) || phone.value < 7){
        errorMsg= `${phone.value} is not a number`;
        phone.nextElementSibling.innerText= errorMsg;
        phone.classList.remove('success');
        phone.classList.add('error');
    }else{
        phone.nextElementSibling.innerText= "";
        phone.classList.remove('error');
        phone.classList.add('success');
    }
    
    if(confirm.value !== password.value){
        errorMsg= `password is not same`;
        confirm.nextElementSibling.innerText= errorMsg;
        confirm.classList.remove('success');
        confirm.classList.add('error');
    }else{
        confirm.nextElementSibling.innerText= "";
        confirm.classList.remove('error');
        confirm.classList.add('success');
    }
    
}

form.addEventListener('submit',handleSubmit);