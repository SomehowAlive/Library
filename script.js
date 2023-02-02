const booksList = document.querySelector(".books-list");

let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function createBookElement(book, index) {
  const bookElem = document.createElement(`
  <li class="book ${book.isRead ? "read" : ""} data-id="${index}">
    <p class="book-title">${book.title}</p>
    <p class="book-author">${book.author}</p>
    <p class="book-pages">${book.pages}</p>
    <button type="button" class="btn view-button">view</button>
    <button type="button" class="btn delete-button">delete</button>
  </li>`);
  return bookElem;
}

function displayBooks() {
  for (let i = 0; i < myLibrary; i++) {
    const bookElem = createBookElement(myLibrary[i], i);
    booksList.append(bookElem);
  }
}
