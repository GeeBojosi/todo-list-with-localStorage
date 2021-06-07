class Todos {
  constructor(title, priority) {
    if (!title && !priority) {
      throw new Error('No todo provided');
    }
    this.title = title;
    this.priority = priority;
  }
}

class UI {
  static displayTodos() {
    const todos = Store.getTodos();
    todos.forEach(todo => this.addTodoToList(todo));
    return todos;
  }

  static addTodoToList(book) {
    const list = document.querySelector('#todo-list');
    list.classList.add('todo-list')
    const todoDiv = document.createElement('div');
    todoDiv.innerHTML = `
      <div class="todo">${book.title}<i class="fas fa-trash delete"></i></div>
    `;
    list.appendChild(todoDiv);
  };

  static removeTodo(element) {
    if (element.classList.contains('delete')) {
      element.parentElement.parentElement.remove()
    }
  }

  static clearFields() {
    document.querySelector('#title').value = "";
    document.querySelector('#priority').value = "";
  }
}

class Store {
  static getTodos() {
    let todos;
    if (localStorage.getItem('todos') === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem('todos'));
    }

    return todos;
  }

  static addTodos(todo) {
    const todos = Store.getTodos();

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  static removeBook(priority) {
    const todos = Store.getTodos();

    todos.forEach((todo, index) => {
      if (todo.priority === priority) {
        todos.splice(index, 1);
      }
    });

    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
export { Todos, UI, Store };

