function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

const permBook = new Book("The Hobbit", "J.R.R. Tolkien", 295);

let myLibrary = [];
myLibrary.push(permBook);
console.log(myLibrary);

const addBook = document.getElementsByClassName("addBook")[0];
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pageInput = document.getElementById("pages");
const saveBtn = document.getElementById("save");
addBook.appendChild(titleInput);
addBook.appendChild(authorInput);
addBook.appendChild(pageInput);
addBook.appendChild(saveBtn);

const content = document.getElementsByClassName("content")[0];

addBook.style.visibility = "hidden";

saveBtn.addEventListener("click", (event) => {
  //add book to array
  console.log(
    `You entered ${titleInput.value} by ${authorInput.value} with ${pageInput.value} pages`
  );
  const book = new Book(titleInput.value, authorInput.value, pageInput.value);
  myLibrary.push(book);
  console.log(myLibrary);
  //add book to page
  bookCard();
  clearInput();
});

function bookCard() {
  const bookCover = document.createElement("div");

  const bookTitle = document.createElement("h1");

  const bookAuthor = document.createElement("h2");

  const bookPages = document.createElement("h3");

  content.appendChild(bookCover);
  bookCover.appendChild(bookTitle);
  bookCover.appendChild(bookAuthor);
  bookCover.appendChild(bookPages);

  bookCover.style.backgroundColor = "blue";
  bookTitle.textContent = titleInput.value;
  bookAuthor.textContent = authorInput.value;
  bookPages.textContent = pageInput.value;
}

function clearInput() {
  titleInput.value = "";
  authorInput.value = "";
  pageInput.value = "";
}

const newBookBtn = document.getElementById("newBook");
newBookBtn.addEventListener("click", (event) => {
  addBook.style.visibility = "visible";
});
