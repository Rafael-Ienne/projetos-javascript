//Seleção de elementos

const todoForm=document.getElementById("todoform");
const todoInput=document.getElementById("todo_input");
const todoList=document.getElementById("to_do_list");
const editForm=document.getElementById("edit-form");
const editInput=document.getElementById("edit-input");
const cancelEdit=document.getElementById("cancel-edit");

//variável para armazenar titulo antigo
let oldInputValue;


//Funções

//Função para salvar tarefa
const saveTodo=(text)=>{
    //criação do template para adicionar a tarefa
    const todo=document.createElement("div");
    todo.classList.add("todo");

    //criação do título da tarefa
    const todoTitle=document.createElement("h3");
    todoTitle.innerText=text;
    todo.appendChild(todoTitle);
    
    //criação dos botões ao adicionar a tarefa
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

    //adicionando a tarefa à lista geral
    todoList.appendChild(todo);
    
    todoInput.value="";
    todoInput.focus();


};

//função que esconde formulário para mostrar outros
const toggleForms=()=> {
    cancelEdit.classList.toggle("hide");
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
}

//função para editar formulário
const updateTodo=(text)=> {

    //array que armazena todas as tarefas atuais
    const todos=document.querySelectorAll(".todo");

    //percorrer cada um dos todo's para alterar o todo certo
    todos.forEach((todo)=> {
        let todoTitle=todo.querySelector("h3");

        if(todoTitle.innerText===oldInputValue){
            todoTitle.innerText=text;
        }
    });
};

//Eventos

//adição de tarefas
todoForm.addEventListener("submit",(e) => { 
    //evita que o formulário(e) seja enviado
    e.preventDefault();
    
    //variável que armazena o valor adicionado no input
    const inputValue = todoInput.value;

    //validação para o usuário não colocar tarefa sem titulo
    if(inputValue) {
        saveTodo(inputValue);
    }
});


//clique em botões da lista todo
document.addEventListener("click", (e) => {
    //constante que armazena o elemento clicado
    const targetEl=e.target;
    //seleção da div mais próxima
    const parentEl=targetEl.closest("div");
    //variável para identificar título antigo da tarefa 
    let todoTitle;

    //verificação da existencia de titulo no elemento-pai
    if(parentEl && parentEl.querySelector("h3")){
        todoTitle=parentEl.querySelector("h3").innerText;
    }

    //adição do riscado à tarefa feita
    if(targetEl.classList.contains("finish-todo")){
        //uso de toggle para completar e descompletar tarefa
        parentEl.classList.toggle("done");
    }

    //remoção da tarefa da lista
    if(targetEl.classList.contains("remove-todo")){
        parentEl.remove();
    }

    //edição da tarefa
    if(targetEl.classList.contains("edit-todo")){
    
        toggleForms();


        editInput.value=todoTitle;
        //armazenamento do valor anterior na memória
        oldInputValue=todoTitle;
    }
});

//configuração do botão cancelar
cancelEdit.addEventListener("click",(e) => {
    e.preventDefault();
    toggleForms();
});

//envio do texto do edit à lista ao clicar o botão c/check
editForm.addEventListener("submit",(e) => {
    e.preventDefault();

    //valor novo do usuário
    const editInputValue=editInput.value;

    if(editInputValue){
        //atualizar dados
        updateTodo(editInputValue);
    }
    toggleForms();
})