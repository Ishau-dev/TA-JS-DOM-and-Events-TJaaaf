let addMovie = document.querySelector('#text');
let root = document.querySelector('ul');

let movies =  JSON.parse(localStorage.getItem('movies')) || [];

let handleAdd = (event)=>{
    event.preventDefault();
    let ele= event.target.value;
    if(event.keyCode==13 && ele !== ""){
        movies.push(ele);
        event.target.value=""; 
        createUi();
    }
    localStorage.setItem('movies',JSON.stringify(movies));
}

let handleDelete= (event)=>{
    let index=event.target.dataset.id;
    movies.splice(index,1);
    createUi();
    localStorage.setItem('movies',JSON.stringify(movies));
}

let createUi = ()=>{
    root.innerHTML= "";
    movies.forEach((movie,index) =>{
        let li = document.createElement('li');
        li.classList.add('flex','justify-between');
        let p= document.createElement('p');
        p.innerText=movie;
        // localStorage.setItem('movies',JSON.stringify(movies));
        let span = document.createElement('span');
        span.setAttribute('data-id',index);
        span.innerText="X";
        span.addEventListener('click',handleDelete);
        li.append(p,span);
        root.append(li);
    });
}
addMovie.addEventListener('keyup',handleAdd);
createUi();