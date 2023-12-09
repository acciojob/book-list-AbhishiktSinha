//your JS code here. If required.
const form = document.querySelector("form");
const tableBody = document.querySelector("#book-list");

tableBody.addEventListener("click", deleteRow);

form.addEventListener("submit", (event)=> {

	event.preventDefault();

	// get the data
	const bookName = form.title.value;
	const authorName = form.author.value;
	const isbn = form.isbn.value;

	// create table row 
	createNewRow(bookName, authorName, isbn);

	// clear form
	form.reset();
});

function createNewRow(title, author, isbn) {
	const tr = document.createElement("tr");
	
		const td_title = document.createElement("td");
		td_title.textContent = title;

		const td_author = document.createElement("td");
		td_author.textContent = author;

		const td_isbn = document.createElement("td");
		td_isbn.textContent = isbn;

		const td_options = document.createElement("td");
			const button = document.createElement("button");
			button.textContent = "X";
			button.className="delete";
		td_options.appendChild(button);

	tr.append(td_title, td_author, td_isbn, td_options)

    tableBody.appendChild(tr);
}

function deleteRow(event) {

    console.log(event.target.tagName);
    if(event.target.tagName === 'BUTTON') {

        // get row
        const row = event.target.parentElement.parentElement;
        row.remove();

        row = null;
    }
	
}