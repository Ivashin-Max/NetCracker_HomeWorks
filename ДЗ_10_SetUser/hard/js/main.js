
async function submit1() {
	window.event.preventDefault();

	let url = 'http://localhost:3000/posts';

	const modal = document.getElementsByClassName('modal')[0]
	const modalClose = document.getElementsByClassName('modal_content_close')[0]
	const name = document.getElementById('name')
	const lastname = document.getElementById('lastname')
	const textarea = document.getElementById('textarea')
	const posts = document.getElementById('posts')

	const post = {
		name: name.value,
		lastname: lastname.value,
		post: textarea.value
	}

	posts.innerHTML = '';

	await fetch(url, { method: 'POST', headers: { 'Content-type': 'application/json;charset=utf-8' }, body: JSON.stringify(post) })
	fetch(url)
		.then(response => response.json())
		.then((response => {
			drawUsers(response)
			showModal();
		}))




	function drawUsers(response) {
		response.forEach((item) => {
			addingPost(item)
		})
	}

	function addingPost(data) {
		const post = document.createElement('p')

		post.innerHTML = `${data.name || 'имя не указано'} ${data.lastname || 'фамилия не указана'}: ${data.post || 'без отзыва'}`;

		posts.appendChild(post);
	}


	function showModal() {
		modal.classList.add('open')
	}


	function closeModal() {
		modal.classList.remove('open')
	}

	modalClose.onclick = () => {
		closeModal()
		return false
	}

	name.value = '';
	lastname.value = '';
	textarea.value = '';
}











