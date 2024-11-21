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
    const table = document.getElementById('table-body');
    
    for (const book of myLibrary) {
        const row = document.createElement('tr');

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

        table.appendChild(row);
    }
    console.log(table)
}

displayBooks();