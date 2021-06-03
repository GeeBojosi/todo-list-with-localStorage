import contents from './modules/pageContent';

pageLoad();

function pageLoad() {
  contents();
};

function open() {
  document.querySelector(".sidenav").style.width = "250px";
  document.querySelector("#main").style.marginLeft = "250px";
}

function close() {
  document.querySelector(".sidenav").style.width = "0";
  document.querySelector("#main").style.marginLeft = "0";
}

document.querySelector('span').addEventListener('click', open);

document.querySelector('.closebtn').addEventListener('click', close);

// Handle modal

// Get the modal
const modal = document.querySelector(".modal");
// Get the button that opens the modal
const btn = document.querySelector("#myBtn");

btn.addEventListener('click', function () {
  modal.style.display = "block";
  document.querySelector(".sidenav").style.width = "0";
  document.querySelector("#main").style.marginLeft = "0";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
})