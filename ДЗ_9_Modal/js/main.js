

function initModal() {
	const dropdown = document.getElementsByClassName('navbar__buttons')[0].firstElementChild.children
	const modal = document.getElementsByClassName('modal')[0]
	const modalClose = document.getElementsByClassName('modal_content_close')[0]

	modalClose.addEventListener('click', closeModal)

	function closeModal() {
		modal.classList.remove('open')
	}

	for (let i = 0; i < dropdown.length; i++) {
		const element = dropdown[i];
		element.addEventListener('click', showModal)
	}

	function showModal() {
		modal.classList.add('open')
	}
}
initModal()


function submit1() {
	window.event.preventDefault();
	let name = document.getElementById('name')
	let lastname = document.getElementById('lastname')
	let textarea = document.getElementById('textarea')

	name.value ? console.log(`Поле имя содержит: ${name.value}`) : console.log('Поле имя пустое');;
	lastname.value ? console.log(`Поле фамилия содержит: ${lastname.value}`) : console.log('Поле фамилия пустое');;
	textarea.value ? console.log(`Поле отзыв содержит: ${textarea.value}`) : console.log('Поле отзыв пустое');

	name.value = '';
	lastname.value = '';
	textarea.value = '';
}

