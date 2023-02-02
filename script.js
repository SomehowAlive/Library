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
  const bookElem = document.createElement("li");

  const titleElem = document.createElement("p");
  const authorElem = document.createElement("p");
  const pagesELem = document.createElement("p");

  const viewBtn = document.createElement("button");
  const delBtn = document.createElement("button");

  bookElem.classList.add("book", book.isRead ? "read" : "");
  bookElem.setAttribute("data-id", index);
  titleElem.classList.add("book-title");
  authorElem.classList.add("book-author");
  pagesELem.classList.add("book-page");
  viewBtn.classList.add("btn", "view-button");
  delBtn.classList.add("btn", "delete-button");

  titleElem.innerText = book.title;
  authorElem.innerText = book.author;
  pagesELem.innerText = book.pages;
  viewBtn.innerText = "view";
  delBtn.innerText = "delete";

  bookElem.append(titleElem);
  bookElem.append(authorElem);
  bookElem.append(pagesELem);
  bookElem.append(viewBtn);
  bookElem.append(delBtn);

  return bookElem;
}

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    const bookObj = myLibrary[i];
    const bookNode = createBookElement(bookObj, i);
    booksList.append(bookNode);
  }
}
