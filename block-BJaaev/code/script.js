let inputText= document.querySelector('#text');
let root= document.querySelector('.things');
let footer = document.querySelector('.foot');
let count= document.querySelector('.pad');
let activeBtn = document.querySelector('.activeBtn');
let completed = document.querySelector('.completed');
let all = document.querySelector('.all');
let clear= document.querySelector('.clear');

let allTodos=localStorage.getItem('allTodos')?JSON.parse(localStorage.getItem('allTodos')):[];
count.innerText=localStorage.getItem('count')?localStorage.getItem('count'):0;
let handleAdd= (event)=>{
    
    event.preventDefault();
    
    if(event.keyCode == '13' && event.target.value !==""){
        let todo= {
            name: event.target.value,
            isDone: "assets/off.svg",
            count: count.innerText++,
            strike: ""
        };
        event.target.value="";
        allTodos.push(todo);
        footer.style.display="flex";
        createUi(allTodos);
        localStorage.setItem('allTodos',JSON.stringify(allTodos));
        localStorage.setItem('count',count.innerText);
   }
   
}

let handleDelete = (event)=>{
    let index = event.target.dataset.id;
    if(allTodos[index].isDone == "assets/on.svg"){
        allTodos.splice(index,1);
    }
    
    createUi(allTodos);
    localStorage.setItem('allTodos',JSON.stringify(allTodos));
    localStorage.setItem('count',count.innerText);
}

let toggleTodo = (event)=>{
    let index = event.target.dataset.id;
    if(allTodos[index].isDone == "assets/off.svg"){
        allTodos[index].isDone = "assets/on.svg";
        allTodos[index].strike = "line-through";
        clear.style.display="flex";
        count.innerText--;
        createUi(allTodos);
        localStorage.setItem('allTodos',JSON.stringify(allTodos));
        localStorage.setItem('count',count.innerText);
    }else if(allTodos[index].isDone == "assets/on.svg"){
        allTodos[index].isDone = "assets/off.svg";
        allTodos[index].strike = "";
        clear.style.display="";
        count.innerText++;
        createUi(allTodos);
        localStorage.setItem('allTodos',JSON.stringify(allTodos));
        localStorage.setItem('count',count.innerText);
    }
}

clear.addEventListener('click',() =>{
    allTodos = allTodos.filter(todo => todo.isDone =="assets/off.svg");
    createUi();
    localStorage.setItem('allTodos',JSON.stringify(allTodos));
    localStorage.setItem('count',count.innerText);
});

 let handleAll =()=>{ 
        createUi(allTodos);   
 }

 all.addEventListener('click',handleAll);

let handleSelectAll = () =>{
    
        allTodos.forEach(todo =>{
            if(todo.isDone == "assets/off.svg"){
            todo.isDone = "assets/on.svg";
            todo.strike = "line-through";
            clear.style.display="flex";
            count.innerText--;
            createUi(allTodos);
            localStorage.setItem('allTodos',JSON.stringify(allTodos));
            localStorage.setItem('count',count.innerText);
            
        }
            else{
                todo.isDone = "assets/off.svg";
                todo.strike = "";
                clear.style.display="";
                count.innerText++;
                createUi(allTodos);
                localStorage.setItem('allTodos',JSON.stringify(allTodos));
                localStorage.setItem('count',count.innerText);
            }          
        });
        createUi(allTodos);
        localStorage.setItem('allTodos',JSON.stringify(allTodos));
        localStorage.setItem('count',count.innerText);
}
let handleActive =()=>{
   activeTodo= allTodos.filter(todo => {
        if(todo.isDone == "assets/off.svg"){
            return todo;   
        }
    });
    createUi(activeTodo);
    localStorage.setItem('allTodos',JSON.stringify(allTodos));
    localStorage.setItem('count',count.innerText);
}
activeBtn.addEventListener('click',handleActive);

let handleCompleted =()=>{
    completedTodo = allTodos.filter(todo => {
         if(todo.isDone == "assets/on.svg"){
             
             return todo;   
         }
     });
     createUi(completedTodo);
     localStorage.setItem('allTodos',JSON.stringify(allTodos));
     localStorage.setItem('count',count.innerText);
 }
 completed.addEventListener('click',handleCompleted);


let createUi= (arr=allTodos)=>{
    root.innerHTML="";
    arr.forEach((todo,index)=>{
        let caret = document.createElement('i');
        caret.classList.add('fas', 'search-nav', 'fa-chevron-down');
        caret.addEventListener('click', handleSelectAll);
        let li= document.createElement('li');
        li.classList.add('flex', 'items-center', 'justify-between');
        let div = document.createElement('div');
        div.classList.add('flex','items-center');
        let img = document.createElement('img');
        img.setAttribute('data-id',index);
        img.src= todo.isDone;

        img.addEventListener('click',toggleTodo);
        let text = document.createElement('p');
        text.innerHTML= todo.name;
        text.style.textDecoration= todo.strike;
        let span = document.createElement('span');
        span.classList.add('close');
        span.innerText="X";
        span.setAttribute('data-id', index);
        span.addEventListener('click',handleDelete);
        div.append(img,text);
        li.append(div,span);
        root.append(caret,li);
    });
}
inputText.addEventListener('keyup',handleAdd);