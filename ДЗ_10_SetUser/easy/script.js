let url = 'http://localhost:3000/posts';
let div = document.getElementById('posts');
let getButton = document.getElementById('getButton');
let setButton = document.getElementById('setButton');

function addingData(data) {
	const author = document.createElement("h3");
	const title = document.createElement("p");
	author.innerHTML = data.author || 'No author';
	title.innerHTML = data.title || 'No content';
	div.appendChild(author);
	div.appendChild(title);
}
function drawUsers(response) {
	response.forEach((item) => {
		addingData(item)
	})
}

setButton.onclick = () => {

	let author = document.getElementById('author');
	let text = document.getElementById('text');

	let post = {
		author: author.value,
		title: text.value
	}

	fetch(url, { method: 'POST', headers: { 'Content-type': 'application/json;charset=utf-8' }, body: JSON.stringify(post) })
		.then(response => response.json())
		.then(response => addingData(response))


	author.value = '';
	text.value = '';

}

getButton.onclick = () => {
	fetch(url)
		.then(response => response.json())
		.then(response => drawUsers(response))
}

