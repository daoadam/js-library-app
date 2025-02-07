//Declare empty array for library
const myLibrary = [];

//constructor for book oject (good to make multiple)
function Book(Author, Title, Pages, HasRead){
    this.Author = Author;
    this.Title = Title;
    this.Pages = Pages;

    this.Read = HasRead; //bool, method is in prototype
}

//prototype methods
Book.prototype.getReadStatus = function(){
    if(this.Read == true){
        return "has been read";
    } else if(this.Read == false){
        return "has not been read";
    } else {
        return "Invalid! Please type in either (true or false)";
    }
};

//function to add book to array
function addBookToLibrary(Author, Title, Pages, HasRead){
    //take params, create a book then store it in the array
    const newBook = new Book(Author, Title, Pages, HasRead);
    //pushing the new element onto the array
    myLibrary.push(newBook);
    bookDisplay(myLibrary);


    //doesnt return anything cos its basically a void function 
}


function bookDisplay(library) {
    const booksContainer = document.querySelector(".books");
    booksContainer.innerHTML = ""; // Clear previous entries

    library.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("card");
        booksContainer.appendChild(card);

        Object.keys(book).forEach(key => {
            const para = document.createElement("p");

            // 🔥 If key is "Read", use getReadStatus(), otherwise just print normally
            if (key === "Read") {
                para.textContent = `Read: ${book.getReadStatus()}`;
            } else {
                para.textContent = `${key}: ${book[key]}`;
            }

            card.appendChild(para);
        });
    });
}

let button = document.querySelector(".add-book-button");
button.addEventListener("click", displayTheForm);

function displayTheForm(){
    document.querySelector("#add-book-button").style.display = "";
}


//start event listener/add input to array for new entry form
const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", intakeFormData)

function intakeFormData(){
    //press a button 
    //button leads to a form
    //users input values into the form: author, title, pages, ...
    //displaying the form is up to me: side bar is okay

    //create a var to locate and create a button
    let Title = document.querySelector("#Title").value;
    let Author = document.querySelector("#Author").value;
    let Pages = document.querySelector("#Pages").value;
    let Read = document.querySelector("#Read").value;

    //break out if invalid inputs
    if((Title == "")  || (Author == "") || (Pages == "") || (Read == "")){
        return;
    }

    console.log("I am working!")

    //call function to input the book data to array
    addBookToLibrary(Title, Author, Pages, Read);

    //reset the form after doing everything
    document.querySelector("#add-book").reset();
}

/*addBookToLibrary("The Adam", "Amanda Dao", "300 Pages", true);
addBookToLibrary("The Adam", "Amanda Dao", "300 Pages", true);
addBookToLibrary("The Adam", "Amanda Dao", "300 Pages", true);
addBookToLibrary("The Adam", "Amanda Dao", "300 Pages", true);
addBookToLibrary("The Adam", "Amanda Dao", "300 Pages", true);
addBookToLibrary("The Adam", "Amanda Dao", "300 Pages", true);
*/



console.log("End of the code array contents", myLibrary);
