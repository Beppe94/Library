const elements = document.getElementById('books')
const addBtn = document.getElementById('addBtn')

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

}

function getInputBook() {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    return new Book(title, author, pages)
}

function submitForm(e) {
    e.preventDefault()
    const newBook = getInputBook()

    myLibrary.push(newBook)
    displayBooks(newBook)

    document.getElementById('bookForm').reset()
}

addBtn.addEventListener('click', submitForm)


