"use strict";
const saveTodo = document.querySelector(".submitTodo");
const cardList = document.querySelector(".cards");

let counter = 0;

const createCards = (title, description) => {
  cardList.appendChild(
    document.createElement("div")
  ).innerHTML = `<div class="card" style="width: 18rem">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">
      ${description}
    </p>
    <div class="d-flex justify-content-between">
      <button
        type="button"
        class="bg-success border border-0 rounded text-white p-2"
        id="deleteBtn${counter}"
      >
        Completed
      </button>
    </div>
  </div>
</div> `;

  alertSection.innerHTML = `<div class="alert alert-success alert-dismissible fade show container" role="alert">
    Successfully created a new todo : ${title}
  </div>`;
  setTimeout(() => {
    alertSection.innerHTML = "";
  }, 2000);
};

saveTodo.addEventListener("click", (e) => {
  let todoTitle = title.value;
  let todoDescription = desc.value;

  e.preventDefault();
  if (todoTitle.length != 0) {
    localStorage.setItem(
      `todo${counter}`,
      JSON.stringify([todoTitle, todoDescription])
    );
    createCards(todoTitle, todoDescription);
    title.value = ``;
    desc.value = ``;
    counter++;
  }
});
