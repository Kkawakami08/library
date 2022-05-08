function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

const permBook = new Book("The Hobbit", "J.R.R. Tolkien", 295);

let myLibrary = [];
myLibrary.push(permBook);
console.log(myLibrary);

// function addBook(e) {
//   console.log(
//     `You entered ${titleInput.value} by ${authorInput.value} with ${pageInput.value} pages`
//   );
//   const book = new Book(titleInput.value, authorInput.value, pageInput.value);
//   myLibrary.push(book);
//   console.log(myLibrary);
// }

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pageInput = document.getElementById("pages");
const saveBtn = document.getElementById("save");

saveBtn.addEventListener("click", (event) => {
  console.log(
    `You entered ${titleInput.value} by ${authorInput.value} with ${pageInput.value} pages`
  );
  const book = new Book(titleInput.value, authorInput.value, pageInput.value);
  myLibrary.push(book);
  console.log(myLibrary);
});
