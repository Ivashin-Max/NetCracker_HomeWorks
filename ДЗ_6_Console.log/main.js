console.logTime = console.log.bind(console);

console.log = function (data) {
	let time = `Логгер (${new Date().toUTCString()}) `;
	this.logTime(time, data);
};

console.log('Проверка логгера');
