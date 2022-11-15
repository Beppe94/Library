const elements = document.getElementById('books');
const addBtn = document.getElementById('addBtn');
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
    remove(cards)
    elements.appendChild(cards)
}

function remove(list) {
    const delBtn = document.createElement('button');
    delBtn.setAttribute('class','delBtn')
    delBtn.innerText = 'Remove'
    list.appendChild(delBtn)
    return list;
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

for(let i = 0; i < child.length; i++) {
    remove(child[i])
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


