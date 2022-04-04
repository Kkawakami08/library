let myLibrary = [];

function Book(title, author, pages, read) {
  (this.title = title),
    (this.autho = author),
    (this.pages = pages),
    (this.read = read);
}

let promptWindow = document.getElementById("promptWindow");

let addBtn = document.getElementById("add");
addBtn.addEventListener("click", (event) => {
  promptWindow.style.visibility = "visible";
  promptWindow.style.opacity = "1";
});

let exitBtn = document.getElementById("exit");
exitBtn.addEventListener("click", (event) => {
  promptWindow.style.visibility = "hidden";
  promptWindow.style.opacity = "0";
});

let titleInput = document.getElementById("title");
let authorInput = document.getElementById("author");
let pagesInput = document.getElementById("pages");
let readInput = document.getElementById("read");

let title;
let author;
let pages;
let read;

let addInfoBtn = document.getElementById("addInfo");
addInfoBtn.addEventListener("click", (event) => {
  title = titleInput.value;
  author = authorInput.value;
  pages = pagesInput.value;
  read = readInput.checked;
  console.log(title);
  console.log(author);
  console.log(pages);
  console.log(read);
});
