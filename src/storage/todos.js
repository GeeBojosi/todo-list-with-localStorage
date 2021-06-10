// import { v4 as uuidv4 } from 'uuid';
class Todos {
  constructor(title, priority, date, id) {
    if (!title && !priority && !date) {
      throw new Error("No todo provided");
    }
    this.title = title;
    this.priority = priority;
    this.date = date;
    this.id = id;
  }
}

class UI {
  static displayTodos() {
    const todos = Store.getTodos();
    todos.forEach((todo) => this.addTodoToList(todo));
    return todos;
  }

  static addTodoToList(todo) {
    const list = document.querySelector("#todo-list");
    list.classList.add("todo-list");
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-wrap");
    console.log(todo);
    let todoPriority;
    if (parseInt(todo.priority) === 1) {
      todoPriority = `<i class="far fa-circle p1"></i>`;
    } else if (parseInt(todo.priority) === 2) {
      todoPriority = `<i class="far fa-circle p2"></i>`;
    } else if (parseInt(todo.priority) === 3) {
      todoPriority = `<i class="far fa-circle p2"></i>`;
    }
    todoDiv.innerHTML = `
      <div class="todo" id="todo">
        ${todoPriority}
        ${todo.title} -
        ${todo.date}
        <i class="fas fa-trash delete del" id=${todo.id}></i>
      </div>
    `;
    list.appendChild(todoDiv);
  }

  static removeTodo(element) {
    if (element.classList.contains("delete")) {
      element.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#priority").value = "";
    document.querySelector("#date").value = "";
  }
}

class Store {
  static getTodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }

    return todos;
  }

  static addTodos(todo) {
    const todos = Store.getTodos();

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  static remove(id) {
    const todos = Store.getTodos();
    // todos.forEach((todo, index) => {
    //   if (todo.priority === priority) {
    //     todos.splice(index, 1);
    //   }
    // });
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
  }
}

export { Todos, UI, Store };
