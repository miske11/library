const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}
 
addBookToLibrary(new Book("1984", "George Orwell", 328, true));
addBookToLibrary(new Book("To Kill a Mockingbird", "Harper Lee", 281, false));
addBookToLibrary(new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true));
addBookToLibrary(new Book("Moby Dick", "Herman Melville", 635, false));

function displayBooks() {
    let id = 0;
    const table = document.getElementById('table-body');

    while (table.firstChild) {
        table.removeChild(table.lastChild);
    }
    
    for (const book of myLibrary) {
        const row = document.createElement('tr');
        row.setAttribute("class", `row${id++}`);

        const title = document.createElement('td');
        title.textContent = book.title;
        row.appendChild(title);

        const author = document.createElement('td');
        author.textContent = book.author;
        row.appendChild(author);

        const pages = document.createElement('td');
        pages.textContent = book.pages;
        row.appendChild(pages);

        const read = document.createElement('td');
        read.textContent = book.isRead ? 'read' : 'not read';
        row.appendChild(read);

        const delBtnCell = document.createElement('td');
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtnCell.appendChild(delBtn);
        row.appendChild(delBtnCell)

        delBtn.addEventListener('click', () =>  {
            table.removeChild(row);
            myLibrary.splice(id - 1, 1);
        })
        

        table.appendChild(row);
    }

}

displayBooks();

const addBook = document.getElementById('add');

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#add");
const closeButton = document.querySelector(".closeBtn");
const confirmButton = document.querySelector("#confirmBtn");

showButton.addEventListener('click', () => {
    dialog.showModal();
})

closeButton.addEventListener('click', () => {
    dialog.close();
})

confirmButton.addEventListener('click', (event) => {
    event.preventDefault();
    const title = document.querySelector('.input-title').value;
    const author = document.querySelector('.input-author').value;
    const pages = document.querySelector('.input-pages').value;
    const read = document.querySelector('.read');
    console.log(read);
    addBookToLibrary(new Book(title, author, pages, isRead(read)));
    displayBooks();
    dialog.close();
})

function isRead(checkbox) {
    return checkbox.checked ? true : false;
}

