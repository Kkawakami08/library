let myLibrary = [];

function Book(title, author, pages) {
  //constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
}

let bookTitle = document.getElementById("title");
let authorName = document.getElementById("author");
let pageNumber = document.getElementById("pages");
let saveBtn = document.getElementById("save");
saveBtn.addEventListener("click", addToLibrary);

function addToLibrary(e) {
  const newBook = new Book(bookTitle.value, authorName.value, pageNumber.value);
  myLibrary.push(newBook);
  displayBooks();
}

let bookShelf = document.getElementsByClassName("shelf")[0];

function displayBooks() {
  bookShelf.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let bookCover = document.createElement("div");
    bookCover.classList.add("cover");
    let coverTitle = document.createElement("h1");
    let coverAuthor = document.createElement("h2");
    let coverPages = document.createElement("h3");

    coverTitle.textContent = myLibrary[i].title;
    coverAuthor.textContent = myLibrary[i].author;
    coverPages.textContent = myLibrary[i].pages;

    bookCover.appendChild(coverTitle);
    bookCover.appendChild(coverAuthor);
    bookCover.appendChild(coverPages);

    bookShelf.appendChild(bookCover);
  }
}
