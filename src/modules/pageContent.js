const createHeader = () => {
  const header = document.createElement('header');
  header.innerHTML = `
    <h1><i class="fas fa-check-double"></i><a href="#">TodoList</a></h1>
    <button id="myBtn">Add Todo</button>
  `;
  return header;
}

const createSideBar = () => {
  const sideBar = document.createElement('div');
  sideBar.classList.add('sidenav');
  sideBar.innerHTML = `
    <a class="closebtn">×</a>
    <a href="#">Your Todos</a>
    <a href="#">Projects</a>
  `;
  return sideBar;
}

const createMain = () => {
  const main = document.createElement('main');
  main.setAttribute('id', 'main');
  main.innerHTML = `
    <span><i class="fas fa-chevron-right"></i></span>
    <div class="modal" id="modal">
      <form class="modal-content" id="myModal">
        <div class="form-contents">
          <h1>Add a Todo</h1>
          <p>fill in the todo details</p>
          <hr/>
          <label for="title"><b>Title</b></label>
          <input type="text" placeholder="Enter title" name="title" required>
          <label for="desc"><b>Description</b></label>
          <textarea name="desc" id="description" cols="86" rows="10"></textarea>
          <div class="btns">
            <button onclick="document.getElementById('modal').style.display='none'" type="button">Cancel</button>
            <button type="submit">Add Todo</button>
          </div>    
        </div>
      </form>
    </div>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero iusto est, quasi rerum rem nesciunt architecto
      dolor unde eveniet, sint eligendi animi numquam ducimus illum sunt provident doloremque molestias fugit.
      Rem assumenda autem excepturi eos voluptatibus laboriosam reprehenderit recusandae quia! Officia voluptatem velit
      voluptatum ratione! Culpa modi molestias, vero natus reiciendis harum ipsam aliquam obcaecati dicta quas,
      consectetur ipsum impedit.
      Voluptatem quasi quae nesciunt amet cumque minima laudantium, culpa tenetur fugit? Fugiat consequatur, odio eveniet
      at inventore animi omnis, tenetur corrupti cum quibusdam quas unde error expedita deserunt debitis illo?
  </p>
    `;
  return main;
}

const contents = () => {
  const { body } = document;
  const container = document.querySelector('#content');
  body.insertBefore(createHeader(), body.firstChild);
  container.appendChild(createSideBar());
  container.appendChild(createMain());
}

export default contents;