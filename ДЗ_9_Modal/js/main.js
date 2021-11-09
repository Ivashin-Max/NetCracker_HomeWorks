
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
