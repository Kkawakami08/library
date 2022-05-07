function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

const permBook = new Book("The Hobbit", "J.R.R. Tolkien", 295);

let myLibrary = [];
myLibrary.push(permBook);

function addBook() {
  let userTitle = prompt("Enter book title");
  let userAuthor = prompt("Enter book's author");
  let userPages = prompt("How many pages?");
  console.log(
    `You entered ${userTitle} by ${userAuthor} with ${userPages} pages`
  );
  const book = new Book(userTitle, userAuthor, userPages);
  myLibrary.push(book);
  console.log(myLibrary);
}

addBook();
