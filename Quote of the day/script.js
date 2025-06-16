const url_qoute = "https://api.quotable.io/quotes/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

function getQuote() {
    const response = featch(url_qoute)
    const data = response.json();

    quote.innerHTML = data.content;
    author.innerHTML = data.author;

}

const url = 'https://quotes-api12.p.rapidapi.com/dev-jokes?category=all&subcategory=javascript';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-host': 'quotes-api12.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}