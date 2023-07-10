function addNewTodo(){
    var newTodo = document.querySelector(".input").value;
    var list = document.querySelector(".list");
    var newTodoElement = document.createElement("li");
    newTodoElement.innerHTML = newTodo;
    list.appendChild(newTodoElement);
    document.querySelector(".input").value = "";
}