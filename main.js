import './style.css'

let myLibrary = [
  // {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages : '200'},
  // {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages : '200'},
];

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

const submitInput = document.getElementById('submit');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');



submitInput.addEventListener('click', function(e){
  const newBook = new Book(titleInput.value, authorInput.value, pagesInput.value)
  myLibrary.push(newBook)
  console.log(myLibrary)
  document.getElementById('popUp').style.display = 'none';
  refreshTable()
  displayBooks()  
  e.preventDefault()
})

//Showing the popup when newBtn is pressed
const newBtn = document.querySelector('#newBtn')

newBtn.addEventListener('click', function(){
  document.getElementById('popUp').style.display = 'block';
})

//Refresh the div when entering multiple entries

function refreshTable (){
  document.getElementById("book-table").innerHTML = '';
}


function displayBooks(){
  for (let i = 0; i < myLibrary.length; i++){

    // Get the current book object
    const book = myLibrary[i];

    // Create a new table row element
    let tr = document.createElement('tr');

    // Create a new table cell for the book title/author and pages
    var tdTitle = document.createElement('td');
    tdTitle.textContent = 'Title: ' + book.title;
    
    var tdAuthor = document.createElement('td');
    tdAuthor.textContent = 'Author: '  + book.author;
    
    var tdPages = document.createElement('td');
    tdPages.textContent = 'Pages: ' + book.pages;

    //Adding the delete button on every entry and refreshing the table after every click
    var button = document.createElement('button');
    button.textContent = 'Delete'

    button.addEventListener('click', function() {
      deleteEntry();
      console.log(myLibrary)
    });

    var buttonRead = document.createElement('button');
    buttonRead.textContent = 'Read'
    buttonRead.setAttribute('id', 'buttonRead' + i)
    buttonRead.setAttribute('style', "background-color: green");

    buttonRead.addEventListener('click', function() {
      // Call the toggleRead function, passing the id of the button as an argument
      toggleRead(this.id);            
    });

    
    // Append the table cells to the table row
    tr.appendChild(tdTitle);
    tr.appendChild(tdAuthor);
    tr.appendChild(tdPages);
    tr.appendChild(button);
    tr.appendChild(buttonRead);

    // Append the table row to the table body
    document.getElementById('book-table').appendChild(tr);

  }
  
}

function deleteEntry(i) {
  // Remove the entry at the specified index from the array
  myLibrary.splice(i, 1);
  refreshTable();
  displayBooks();
}

function toggleRead(id){
  let buttonRead = document.getElementById(id);  
  
// Check if the background color is red 
  if (buttonRead.style.backgroundColor == 'red'){
    buttonRead.style.backgroundColor = 'green';
    buttonRead.textContent = 'Read';
  } else if (buttonRead.style.backgroundColor == 'green' ){
    buttonRead.style.backgroundColor = 'red';
    buttonRead.textContent = 'Not Read';
  }
}





