let form = document.querySelector('form');

let handleSubmit =(event)=>{
    let userError = "";
    let nameError="";
    event.preventDefault();
    
    let userName = event.target.user;
    
    if(userName.value.length < 4){
        userError= `${userName.value} can't be less than 4 characters`;
        userName.nextElementSibling.innerText = userError;
    }
    let nameInput= event.target.name.value;
    if(typeof(nameInput) == 'number'){
        nameError= `${nameInput} can't be number`;
        nameInput.nextElementSibling.innerText = nameError;
    }
}

form.addEventListener('submit',handleSubmit);