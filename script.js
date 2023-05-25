"use strict";
const addTodo = document.querySelector(".inputValue");
const saveButton = document.querySelector(".save");
const addButton = document.querySelector(".add");
const hiddenFeature = document.querySelector(".hidden");
const showList = document.querySelector(".showTodo");
const mainList = document.querySelector(".mainList");

const todoList = [];

const showTodoList = function (item) {
  mainList.appendChild(document.createElement("li")).textContent = item;
};

addButton.addEventListener("click", function () {
  hiddenFeature.style.display = "block";
});

saveButton.addEventListener("click", function () {
  todoList.unshift(addTodo.value);
  for (let item of todoList) {
    showTodoList(item);
    todoList.pop();
    console.log(item);
  }
  addTodo.value = "";
  hiddenFeature.style.display = "none";
});
