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

    elements.appendChild(cards)

    remove(cards)
    checkBox(cards)
}

function remove(list) {
    const delBtn = document.createElement('button');
    delBtn.setAttribute('class','delBtn')
    delBtn.innerText = 'Remove'
    list.appendChild(delBtn)
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

function checkBox(list) {
    const check = document.createElement('label')
    check.innerText = 'Have you read it?'
    check.setAttribute('id', 'check')

    const checkInput = document.createElement('input')
    checkInput.setAttribute('type', 'checkbox')
    checkInput.setAttribute('id', 'check')
    list.appendChild(check)
    list.appendChild(checkInput)
    return list
}

for(let i = 0; i < child.length; i++) {
    checkBox(child[i]);
}

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

    if(newBook) {
        myLibrary.push(newBook)
    }
    displayBooks(newBook)

    document.getElementById('bookForm').reset()
}


addBtn.addEventListener('click', submitForm)


