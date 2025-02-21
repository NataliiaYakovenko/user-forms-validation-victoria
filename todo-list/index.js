"use strict";

const todoForm = document.querySelector(".todo-container>form");
const todoInput = document.querySelector(".todo-container input");
const todoList = document.querySelector(".todoList");

// const TODO_REX_EXP = /^\s*$/;
const TODO_REX_EXP = /^(?!\s*$).+/;

todoInput.oninput = (e) => {
  if (TODO_REX_EXP.test(e.target.value)) {
    e.target.classList.add("valid");
    e.target.classList.remove("invalid");
  } else {
    e.target.classList.remove("valid");
    e.target.classList.add("invalid");
  }
};

todoForm.onsubmit = (e) => {
  e.preventDefault();
  if (TODO_REX_EXP.test(e.target.elements["todo-item"].value)) {
    const todoListItem = createTodoItem(e.target.elements["todo-item"].value);
    todoList.append(todoListItem);
    e.target.elements["todo-item"].value = "";
    e.target.elements["todo-item"].classList.remove("valid");
  } else {
    e.target.elements["todo-item"].classList.add("invalid");
  }
};

function createTodoItem(value) {
  const todoListItem = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.onclick = (e) => {
    e.target.parentElement.remove();
  };

  const isDoneEl = document.createElement('input')
  isDoneEl.type = 'checkbox';
  isDoneEl.onchange = ({target})=>{
    target.nextSibling.classList.toggle('doneTask')
  }


  const todoValue = document.createElement("span");
  todoValue.textContent = value;

  todoListItem.append(isDoneEl,delBtn, todoValue);

  return todoListItem;
}
