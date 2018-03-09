

document.getElementById('saveBook').addEventListener('click', saveBook);
document.getElementById('saveArticle').addEventListener('click', saveArticle);
document.getElementById('viewBooks').addEventListener('click', viewBooks);
document.getElementById('viewArticles').addEventListener('click', viewArticles);


// SAVE A BOOK

function saveBook(e) {

	// GET VALUES FROM FORM
	var nameBook = document.getElementById('nameBook').value;
	var authorBook = document.getElementById('authorBook').value;
	var descriptionBook = document.getElementById('descriptionBook').value;

	var statusBook = document.getElementsByName('statusBook');
	var status;
	for(var i = 0; i < statusBook.length; i++){
		if(statusBook[i].checked){
			status = statusBook[i].value;
		}
	}

	 //CHECK EMPTY FIELDS
	if(!nameBook || !authorBook || !descriptionBook || !status) {
		alert('Please FIll the form');
	return false;
	} else {

	}

	// CREATE OBJECT FOR LOCAL STORAGE
	var book = {
		name: nameBook,
		author: authorBook,
		description: descriptionBook,
		status : status
	};

	if(localStorage.getItem('books')=== null){
		//Init Array
		var books = [];
		// Add to array
		books.push(book);
		// Set Storage
		localStorage.setItem('books', JSON.stringify(books));
	} else {
		// gwt Books from localsotrage
		var books = JSON.parse(localStorage.getItem('books'));
		// Add to Array
		books.push(book);

		//Reset back to LocalStorage
		localStorage.setItem('books', JSON.stringify(books));
	}


	document.getElementById('formBook').reset();
	e.preventDefault();
}

// SAVE AN ARTICLE

function saveArticle(e) {
	// GET VALUES FROM FORM
	var nameArticle = document.getElementById('nameArticle').value;
	var authorArticle = document.getElementById('authorArticle').value;
	var descriptionArticle = document.getElementById('descriptionArticle').value;
	var link = 'http://';
	 link += document.getElementById('linkArticle').value;
	var statusArticle = document.getElementsByName('statusArticle');
	var status;

	for(var i= 0; i < statusArticle.length; i++){
		if(statusArticle[i].checked){
			status = statusArticle[i].value;
		}
	}

	 //CHECK EMPTY FIELDS
	if(!nameArticle || !authorArticle || !descriptionArticle || !link || !status) {
		alert('Please FIll the form');
		return false;
	} else {

	}
	// CREATE OBJECT FOR LOCAL STORAGE
	var article = {
		name: nameArticle,
		author: authorArticle,
		description: descriptionArticle,
		link : link,
		status: status
	};

	if(localStorage.getItem('articles')=== null){
		//Init Array
		var articles = [];
		// Add to array
		articles.push(article);
		// Set Storage
		localStorage.setItem('articles', JSON.stringify(articles));
	} else {
		// get from localsotrage
		var articles = JSON.parse(localStorage.getItem('articles'));
		// Add  to Array
		articles.push(article);

		//Reset back to LocalStorage
		localStorage.setItem('articles', JSON.stringify(articles));
	}


	document.getElementById('formArticle').reset();

	e.preventDefault();
}

// DISPLAY ALL BOOKS
function viewBooks() {

	var books = JSON.parse(localStorage.getItem('books'));
	var outputBooks = document.getElementById('outputBooks');

	outputBooks.innerHTML = '';

	for(i=0; i<books.length; i++) {
		var name = books[i].name;
		var author = books[i].author;
		var description = books[i].description;
		var status = books[i].status;

		outputBooks.innerHTML +=`
	<div class="card">
			<div class="card-block">
			<h4 class="card-title">Title: ${name}</h4>
		<h6 class="card-subtitle mb-2 text-muted">Author: ${author}</h6>
		<p class="card-text">Descritpion: ${description}</p>
		<p class="card-text">Status: ${status}</p>
		</div>
		</div>
		<hr>
		`;
	}
}

// DISPLAY ALL THE ARTICLES
// DISPLAY ALL BOOKS
function viewArticles() {

	var articles = JSON.parse(localStorage.getItem('articles'));
	var outputArticles = document.getElementById('outputBooks');

	outputArticles.innerHTML = '';

	for(i=0; i<articles.length; i++) {
		var name = articles[i].name;
		var author = articles[i].author;
		var description= articles[i].description;
		var link = articles[i].link;
		var status = articles[i].status;

		outputArticles.innerHTML +=`
	<div class="card">
			<div class="card-block">
			<h4 class="card-title">Title: ${name}</h4>
		<h6 class="card-subtitle mb-2 text-muted">Author: ${author}</h6>
		<p class="card-text">Descritpion: ${description}</p>
		<p class="card-text">Status: ${status}</p>
		<a href="${link}" class="card-link" target="_blank">Article'\s page</a>
		</div>
		</div>
		<hr>
		`;
	}
}

function deleteArticle() {
	var articles = JSON.parse(localStorage.getItem('articles'));
	for(i=0 ; i<articles.lenth; i++){
		var article = articles[i].name ;
	}

	console.log(article);


}

 //GET BOOKS AND ARTICLES IN ALPHABETICAL ORDER
function displayAll() {
	var books = JSON.parse(localStorage.getItem('books'));
	var articles = JSON.parse(localStorage.getItem('articles'));
	var outputAz = document.getElementById('outputAz');
	var	elements = books.concat(articles);
	var sorting = elements.sort();

	//elements.sort();
	outputAz.innerHTML = '';

	for(var i=0;i< sorting.length; i++) {
		var title = sorting[i].name;

		outputAz.innerHTML +=`
								<li class="titles">TITLE: ${title}
									<div class="buttonDetails" style="display: none">
										<a href="#" class="btn btn-sm btn-primary" id="det">Details</a>
									</div>
								</li>
								<hr>`;
	}
}
displayAll();







