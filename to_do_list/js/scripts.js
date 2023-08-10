//Seleção de elementos
const todoForm=document.getElementById("todoform");
const todoInput=document.getElementById("todo_input");
const todoList=document.getElementById("to_do_list");
const editForm=document.getElementById("edit-form");
const editInput=document.getElementById("edit-input");
const cancelEdit=document.getElementById("cancel-edit");

let oldInputValue;


//Funções
const saveTodo=(text)=>{
    const todo=document.createElement("div");
    todo.classList.add("todo")

    const todoTitle=document.createElement("h3");
    todoTitle.innerText=text;
    todo.appendChild(todoTitle);
    
    const doneBtn=document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML='<span class="material-symbols-outlined">done</span>';
    todo.appendChild(doneBtn);

    const editBtn=document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML='<span class="material-symbols-outlined">edit</span>';
    todo.appendChild(editBtn);

    const deleteBtn=document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML='<span class="material-symbols-outlined">close</span>';
    todo.appendChild(deleteBtn);

    todoList.appendChild(todo);
    
    todoInput.value="";
    todoInput.focus();


};

const toggleForms=()=> {
    cancelEdit.classList.toggle("hide");
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
}

const updateTodo=(text)=> {
    const todos=document.querySelectorAll(".todo");

    todos.forEach((todo)=> {
        let todoTitle=todo.querySelector("h3");

        if(todoTitle.innerText===oldInputValue){
            todoTitle.innerText=text;
        }
    });
};

//Eventos
todoForm.addEventListener("submit",(e) => { 
    e.preventDefault();
    
    const inputValue = todoInput.value;

    if(inputValue) {
        saveTodo(inputValue)
    }
});

document.addEventListener("click", (e) => {
    const targetEl=e.target;
    const parentEl=targetEl.closest("div");
    let todoTitle;

    if(parentEl && parentEl.querySelector("h3")){
        todoTitle=parentEl.querySelector("h3").innerText;
    }

    if(targetEl.classList.contains("finish-todo")){
        parentEl.classList.toggle("done");
    }

    if(targetEl.classList.contains("remove-todo")){
        parentEl.remove();
    }

    if(targetEl.classList.contains("edit-todo")){
        toggleForms();

        editInput.value=todoTitle;
        oldInputValue=todoTitle;
    }
});

cancelEdit.addEventListener("click",(e) => {
    e.preventDefault();
    toggleForms();
});

editForm.addEventListener("submit",(e) => {
    e.preventDefault();

    const editInputValue=editInput.value;

    if(editInputValue){
        updateTodo(editInputValue);
    }
    toggleForms();
})