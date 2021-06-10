const createHeader = () => {
  const header = document.createElement("header");
  header.innerHTML = `
    <h1><i class="fas fa-check-double"></i><a href="#">TodoList</a></h1>
    <button id="myBtn">Add Todo</button>
  `;
  return header;
};

const createSideBar = () => {
  const sideBar = document.createElement("div");
  sideBar.classList.add("sidenav");
  sideBar.innerHTML = `
    <a class="closebtn">×</a>
    <div style="color:#fff" class="collapsible">Today</div>
    <div class="content">
      <li>This is just some random content.</li>
      <li>This is just some random content.</li>
      <li>This is just some random content.</li>
      <li>This is just some random content.</li>
    </div>
    <hr/>
    <div style="color:#fff" class="collapsible">Projects</div>
    <div class="content">
    <li>This is just some random content.</li>
    <li>This is just some random content.</li>
    <li>This is just some random content.</li>
    <li>This is just some random content.</li>
  </div>
  `;
  return sideBar;
};

const createMain = () => {
  const main = document.createElement("main");
  main.setAttribute("id", "main");
  main.innerHTML = `
    <span><i class="fas fa-chevron-right"></i></span>
    <div class="modal" id="modal">
      <form class="modal-content" id="myModal">
        <div class="form-contents">
          <h1>Add a Todo</h1>
          <hr/>
          <input type="text" id="title" placeholder="Title" name="title" required>
          <select id="priority" required>
            <option value="" selected>Select Priority</option>
            <option value="1">priority 1</option>
            <option value="2">priority 2</option>
            <option value="3">priority 3</option>
          </select>
          <input id="date" type="date"/>
          <div class="btns">
            <button onclick="document.getElementById('modal').style.display='none'" type="button">Cancel</button>
            <button type="submit">Add Todo</button>
          </div>    
        </div>
      </form>
    </div>
    <div id="todo-list">
     
    </div>
    `;
  return main;
};

const contents = () => {
  const { body } = document;
  const container = document.querySelector("#content");
  body.insertBefore(createHeader(), body.firstChild);
  container.appendChild(createSideBar());
  container.appendChild(createMain());
};

export default contents;
