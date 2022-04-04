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
