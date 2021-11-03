console.logTime = console.log.bind(console);

console.log = function (...data) {
	let time = `Время (${new Date().toLocaleTimeString()}) `;
	this.logTime(time, ...data);
};
let q = 'wrewerw'
console.log('Проверка логгера', q, 123123);
