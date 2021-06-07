import contents from './modules/pageContent';
import { UI, Todos, Store } from './storage/todos';

pageLoad();
// Load DOM stuff
function pageLoad() {
  contents();
};
// get the sidenav and main
const sideNav = document.querySelector(".sidenav");
const main = document.querySelector('#main');

function open() {
  sideNav.style.width = "250px";
  main.style.marginLeft = "250px";
}

function close() {
  sideNav.style.width = "0";
  main.style.marginLeft = "0";
}
// clickable icons for opening and closing sidenav 
document.querySelector('span').addEventListener('click', open);
document.querySelector('.closebtn').addEventListener('click', close);

// Handle modal
// Get the modal
const modal = document.querySelector(".modal");
// Get the button that opens the modal
const btn = document.querySelector("#myBtn");

btn.addEventListener('click', function () {
  modal.style.display = "block";
  // main.style.marginLeft = "0";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

// Handle collapsible sidebar
const coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function (e) {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
};

document.querySelector('#myModal').addEventListener('submit', e => {
  e.preventDefault();
  // Get form values
  const title = document.querySelector('#title').value;
  const priority = document.querySelector('#priority').value;

  // instantiate a new todo
  const todo = new Todos(title, priority);
  // add todo to list
  UI.addTodoToList(todo);
  // add to localStorage
  Store.addTodos(todo);
  modal.style.display = "none";
  // clear fields
  UI.clearFields()
});

document.querySelector('#todo-list').addEventListener('click', e => {
  UI.removeTodo(e.target);
})

// console.log(UI.displayTodos())
document.addEventListener('DOMContentLoaded', UI.displayTodos())