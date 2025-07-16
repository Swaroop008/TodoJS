let todoItemsContainer=document.getElementById("todoItemsContainer");

let todoElement=document.createElement('li');

todoElement.classList.add("todo-item-container","d-flex","flex-row");
todoItemsContainer.appendChild(todoElement);

console.log(todoItemsContainer);

let labelContainer = document.createElement("div");
labelContainer.classList.add("label-container", "d-flex", "flex-row");
todoElement.appendChild(labelContainer);

console.log(todoItemsContainer);


