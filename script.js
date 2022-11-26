const elements = document.getElementById('books');
const addBtn = document.getElementById('addBtn');
const square = document.querySelector('.square');
const popUp = document.querySelector('.popup');
const focusTitle = document.getElementById('title');
const readBtn = document.querySelector('.readButton');
const child = elements.children;

class Book {
    constructor(title, author, pages) {
        this.title = title
        this.author = author
        this.pages = pages
    }
}

let myLibrary = [];

function displayBooks(book) {
    const cards = document.createElement('div')
    cards.className = 'cards'
    cards.setAttribute('id','bookId')
    
    const title = document.createElement('p')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    
    title.innerText = book.title
    author.innerText = book.author
    pages.innerText = book.pages
    
    cards.appendChild(title)
    cards.appendChild(author)
    cards.appendChild(pages)
    
    elements.appendChild(cards)
    
    readButton(cards)
    remove(cards)
}

function remove(list) {
    const delBtn = document.createElement('button');
    delBtn.setAttribute('class','delBtn');
    delBtn.innerText = 'Remove 🗑';
    delBtn.style.color = 'black';
    list.appendChild(delBtn);
    return list;
}

for(let i = 0; i < child.length; i++) {
    remove(child[i])
}

elements.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON') {
        const button = event.target
        const parent = button.parentNode
        if(button.className == 'delBtn') {
            elements.removeChild(parent)
        }
    }
})

function readButton(list) {
    const button = document.createElement('button');
    button.setAttribute('class', 'readButton');
    button.innerText = 'Read';
    button.style.color = 'black';
    button.style.background = 'lightgreen';
    
    list.appendChild(button)
    return list
}

for(let i = 0; i < child.length; i++) {
    readButton(child[i]);
}

elements.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON') {
        const button = event.target
        if(button.className == 'readButton' && button.innerText === 'Read') {
            button.innerText = 'Not Read';
            button.style.background = 'salmon';
        } else if (button.className == 'readButton' && button.innerText === 'Not Read') {
            button.innerText = 'Read';
            button.style.background = 'lightgreen'
        }
    }
})

function getInputBook() {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    
    if(title != '' && author != '' && pages != '') {
        return new Book(title, author, pages);
    } else {
        alert('Invalid inputs')
    }
}

function submitForm(e) {
    e.preventDefault()
    const newBook = getInputBook();
    
    myLibrary.push(newBook)
    
    displayBooks(newBook)
    
    document.getElementById('bookForm').reset()
    closePopup()
}

function popup() {
    popUp.classList.add('open-popup');
    mainFocus()
}

function closePopup() {    
    popUp.classList.remove('open-popup');
}

function mainFocus() {
    focusTitle.focus()
}


function changeColor() {
    let val = document.getElementById('readBtn').text

    console.log(val)
}

function myBook() {
    
    let myBook = new Book('The Last Wish', 'Andrzej Sapkowski', 359);

    myLibrary.push(myBook);

    displayBooks(myBook);
}

myBook()
square.addEventListener('click', popup)
addBtn.addEventListener('click', submitForm)


