// Main Book object model
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;  
}

// Library object model
function Library() {
    this.myLibrary = [];
    
    this.addToLibrary = function(myLibrary) {
        this.myLibrary.push(myLibrary);
    }
}

// Create new book object
let book1 = new Book('Awaken the Giant Within', 'Tony Robbins', '351', 'already read');
let book2 = new Book('Think and Grow Rich', 'Napoleon Hill', '271', 'currently reading');
let book3 = new Book('Rich Dad Poor Dad', 'Robert T. Kiyosaki', '289', 'finish read');
let book4 = new Book('Atomic Habits', 'James Clear', '279', 'finish read');
let book5 = new Book('The Outliers', 'Malcom Gladwell', '311', 'currently reading');

// Create new library object
let library = new Library();

// Add books to the empty array
library.addToLibrary(book1);
library.addToLibrary(book2);
library.addToLibrary(book3);
library.addToLibrary(book4);
library.addToLibrary(book5);

// Function to add main Book to HTML content
function addToHTML() {
    for (let i=0; i < library.myLibrary.length ; i++ ) {
            let tbody = document.querySelector('#tbody');
            let content = 
                `<tr>
                    <td id='title'> ${library.myLibrary[i].title} </td>
                    <td id='author'> ${library.myLibrary[i].author} </td>
                    <td id='pages'> ${library.myLibrary[i].pages} </td>
                    <td id='read'> ${library.myLibrary[i].read} </td>
                </tr>`

            tbody.innerHTML += content;
    }
}

// Submit button
// Add event listener to submit button

function submitButton() {
    let submit = document.getElementById('submit');
    submit.addEventListener('click', function(e) {
        e.preventDefault()
        let jsTitle = document.getElementById('title').value;
        let jsAuthor = document.getElementById('author').value;
        let jsPages = document.getElementById('pages').value;
        let jsRead = document.getElementById('read').value;

        let tbody = document.getElementById('tbody');

        let tr = document.createElement('tr');

        let data = `
        <td> ${jsTitle} </td>
        <td> ${jsAuthor} </td>
        <td> ${jsPages} </td>
        <td> ${jsRead} </td>
        `

        tr.innerHTML = data;
        tbody.appendChild(tr);        
    })
}

// To make add-book button modal work
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
  
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  
  document.addEventListener('keydown', function (e) {
    // console.log(e.key);
  
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
});  
