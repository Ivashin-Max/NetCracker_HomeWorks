
'use strict'

function isCarCheap() {
	const CHEAP_PRICE = 5e6
	let carPrice = Math.floor((Math.random() * 1e7));
	console.log(`Цена машины: ${carPrice} рублей`);
	carPrice <= CHEAP_PRICE ? console.log('Могу себе позволить') : console.log('Машина дорогая');
	if (carPrice <= CHEAP_PRICE) return true
	else return false
}

const willIGetNewCar = new Promise(
	(resolve, reject) => {
		if (isCarCheap()) {
			const car = {
				brand: 'BMW',
				model: '5'
			};
			resolve(car);
		} else {
			const reason = new Error('Не могу себе позволить');
			reject(reason);
		}

	}
);

const showCar = function (car) {
	const message = 'Я купил новую машину: ' + car.brand + ' ' + car.model;
	return Promise.resolve(message);
};


const checkCarPrice = function () {
	willIGetNewCar
		.then(showCar)
		.then(resolved => console.log(resolved))
		.catch(error => console.log(error.message));
};
checkCarPrice();