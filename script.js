const openFormBtn = document.querySelector(".open-form-btn");
const booksList = document.querySelector(".books-list");
const overlay = document.querySelector(".overlay");
const addBookForm = document.querySelector(".add-book-form");
const AddBookBtn = document.querySelector(".add-book-btn");
const closeFormBtn = document.querySelector(".close-form-btn");

let myLibrary = [];
let currIndex = -1;

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  currIndex = myLibrary.length - 1;
}

function removeBookFromLibrary(index) {
  myLibrary = myLibrary.splice(index, 1);
}

function deleteBookElem(e) {
  const index = e.target.parentElement.getAttribute("data-id");
  removeBookFromLibrary(index);
  e.target.parentElement.remove();
}

function toggleBookRead(index) {
  myLibrary[index].isRead = !myLibrary[index].isRead;
}

function makeBookReadhandler(e) {
  const index = e.target.parentElement.getAttribute("data-id");
  toggleBookRead(index);
  e.target.parentElement.classList.toggle("read");
}

function createBookElement(book, index) {
  const bookElem = document.createElement("li");

  const titleElem = document.createElement("p");
  const authorElem = document.createElement("p");
  const pagesELem = document.createElement("p");

  const viewBtn = document.createElement("button");
  const delBtn = document.createElement("button");

  bookElem.classList.add("book");
  book.isRead ? bookElem.classList.add("read") : "";
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

  viewBtn.addEventListener("click", makeBookReadhandler);
  delBtn.addEventListener("click", deleteBookElem);

  bookElem.append(titleElem);
  bookElem.append(authorElem);
  bookElem.append(pagesELem);
  bookElem.append(viewBtn);
  bookElem.append(delBtn);

  return bookElem;
}

function displayNewBooks(index) {
  for (let i = index; i < myLibrary.length; i++) {
    const bookObj = myLibrary[i];
    const bookNode = createBookElement(bookObj, i);
    booksList.append(bookNode);
  }
}

/* dom functions and event handling */

function openForm() {
  overlay.classList.remove("hidden");
  // this is probably wrong I now that you don't have to use setTimeout for a stupid animation to appear :(
  setTimeout(() => addBookForm.classList.remove("hidden"), 50);
}

function closeForm() {
  overlay.classList.add("hidden");
  addBookForm.classList.add("hidden");
}

function clearForm() {
  addBookForm.title.value = "";
  addBookForm.author.value = "";
  addBookForm.pages.value = 1;
  addBookForm.isRead.checked = false;
}

function handleAddBookForm(e) {
  e.preventDefault();
  const title = e.target.title.value.trim();
  const author = e.target.author.value.trim();
  const pages = e.target.pages.value;
  const isRead = e.target.isRead.checked;
  if (title && title !== " " && author != " ") {
    const book = new Book(title, author, pages, isRead);
    addBookToLibrary(book);
    displayNewBooks(currIndex);
    clearForm();
    closeForm();
  }
}

openFormBtn.addEventListener("click", openForm);
closeFormBtn.addEventListener("click", closeForm);
addBookForm.addEventListener("submit", handleAddBookForm);
