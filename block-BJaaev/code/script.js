let inputText= document.querySelector('#text');
let root= document.querySelector('.things');

let allTodos=[];
let count=1;
let handleAdd= (event)=>{
    
    event.preventDefault();
    
    if(event.keyCode == '13' && event.target.value !==""){
        let todo= {
            name: event.target.value,
            isDone: "assets/off.svg",
            count: count++
        };
        event.target.value="";
        allTodos.push(todo);
        
        createUi();
   }
   
}

let toggleTodo = (event)=>{
    let index = event.target.dataset.id;

    if(allTodos[index].isDone == "assets/off.svg"){
        allTodos[index].isDone = "assets/on.svg";
        // allTodos[index].name = allTodos[index].name.strike();
    //     document.querySelector('text');
    //    ele.style.textDecoration="line-through";

        createUi();
    }else if(allTodos[index].isDone == "assets/on.svg"){
        allTodos[index].isDone = "assets/off.svg";
        allTodos[index].name = allTodos[index].name.strike();
        createUi();
    }
    // allTodos[index].isDone=(allTodos[index].isDone)? "assets/on.svg":"assets/off.svg";
    // createUi();
}

let createUi= ()=>{
    root.innerHTML="";
    allTodos.forEach((todo,index)=>{
        let caret = document.createElement('i');
        caret.classList.add('fas', 'search-nav', 'fa-chevron-down');
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
        // text.classList.add('text-dec');
        let span = document.createElement('span');
        span.classList.add('close');
        span.innerText="X";
        span.setAttribute('data-id', index);
        div.append(img,text);
        li.append(div,span);
        let footer= document.createElement('li');
        footer.classList.add('flex', 'status', 'justify-between');
        let div2= document.createElement('div');
        div2.classList.add('flex');
        let span2 = document.createElement('span');
        span2.classList.add('pad');
        span2.innerText= todo.count;
        let text2= document.createElement('p');
        text2.innerText= "items left";
        div2.append(span2,text2);
        div3 = document.createElement('div');    
        let button1= document.createElement('button');
        button1.classList.add("inactive");
        button1.innerText= "All";
        let button2= document.createElement('button');
        button2.innerText= "Active";
        button2.classList.add("inactive");
        let button3= document.createElement('button');
        button3.innerText= "Completed";
        button3.classList.add("inactive");
        div3.append(button1,button2,button3);
        let text3= document.createElement('p');
        text3.innerText= "Clear completed";
        text3.classList.add('pad');
        footer.append(div2,div3,text3);
        root.append(caret,li,footer);
    });
}
inputText.addEventListener('keyup',handleAdd);