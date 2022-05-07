let myLibrary = [];

function bookCard() {}

let main = document.getElementById("main");

myLibrary[0] = new Book("Harry Potter", "JK Rowling", 256, true);
let card = document.createElement("div");
main.appendChild(card);

console.log(myLibrary[0]);

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
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
exitBtn.addEventListener("click", exit);

function exit(e) {
  promptWindow.style.visibility = "hidden";
  promptWindow.style.opacity = "0";
}

let titleInput = document.getElementById("title");
let authorInput = document.getElementById("author");
let pagesInput = document.getElementById("pages");
let readInput = document.getElementById("read");

let title;
let author;
let pages;
let read;
let book;

let addInfoBtn = document.getElementById("addInfo");
addInfoBtn.addEventListener("click", (event) => {
  title = titleInput.value;
  author = authorInput.value;
  pages = pagesInput.value;
  read = readInput.checked;
  book = new Book(title, author, pages, read);
  myLibrary.push(book);
  exit();
  console.log(myLibrary);
});
