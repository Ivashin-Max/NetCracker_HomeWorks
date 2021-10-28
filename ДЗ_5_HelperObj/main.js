'use strict'

//биндим контекст
console.logTime = console.log.bind(console);
//Переопределяем консоль, спредим дату, на случай, если в консоль лог передано несколько аргументов
console.log = function (...data) {
	let time = `Время (${new Date().toLocaleTimeString()}) `;
	this.logTime(time, ...data);
};

//Создаём класс
class Helper {

	constructor() {
		this.errorMsg = 'Этот метод может принимать только объект';
		this.typeOfobj = 'object';
		//не знаю как вы хотели, чтоб я это сделал, но я додумался только до такого метода в лоб
		let q = Object.getPrototypeOf(this);
		let youShallNotPass = {
			configurable: false,
			enumerable: false,
			writable: false
		}
		//просто в лоб закидываю всем методам дескриптор
		Object.defineProperties(q, {
			'isEmpty': youShallNotPass,
			'isObject': youShallNotPass,
			'deepClone': youShallNotPass,
			'isEqual': youShallNotPass,
			'findValue': youShallNotPass,
			'hasKey': youShallNotPass,
		}
		)

	}

	//раскладываем объект на ключи, если длинна = 0, то у нас пустой объект
	isEmpty(obj) {
		if (this.isObject(obj) === false) return;
		if (Object.keys(obj).length) { console.log(`isEmpty:`, false) }
		else { console.log(`isEmpty:`, true) }
	}

	isObject(obj) {
		//просто сравниваем тип аргумента с 'object'
		if (typeof obj !== this.typeOfobj) { console.warn(`Метод isObject не пропускает ваш аргумент, требуется объект`, false); return false }
		else { return true }
	}

	deepClone(obj) {
		if (this.isObject(obj) === false) return;
		//разворачиваем объект любого уровня вложенности
		let deepCloneObj = JSON.parse(JSON.stringify(obj))
		return deepCloneObj
	}

	isEqual(obj1, obj2) {
		if (this.isObject(obj1) === false || this.isObject(obj2) === false) return;
		//приводим к строке и сравниваем
		const stringifyObj1 = JSON.stringify(obj1);
		const stringifyObj2 = JSON.stringify(obj2);
		stringifyObj1 === stringifyObj2 ? console.log(`isEqual:`, true) : console.log(`isEqual:`, false)

	}

	findValue(obj, key) {
		if (this.isObject(obj) === false) return;

		getProperty(obj);
		//перебираем объект
		function getProperty(obj) {
			for (let property in obj) {
				//если нашли значение - возвращаем его
				if (property === key) { console.log(`findValue с ключем ${key}`, obj[property]); return }
				//если нашли объект, то спускаемся глубже
				if (typeof (obj[property]) === 'object') {
					getProperty(obj[property]);
				}
			}
		}
	}

	hasKey(obj, key) {
		if (this.isObject(obj) === false) return;
		//раскладываем на строку и сплитим по уровням вложенности
		const stringifyObj = JSON.stringify(obj).split(',');
		//получается массив из "уровней вложенности объекта"
		for (let i = 0; i < stringifyObj.length; i++) {
			//на каждом уровне сплитим ключ и значение, выбираем ключ
			const element = stringifyObj[i].split(':')[0];
			//и сравниваем с заданным
			if (element.includes(key)) {
				console.log(`hasKey:`, true);
				return
			}
		}
		return console.log(`hasKey:`, false)
	}

}

const helper = new Helper();

const obj1 = { property: "value" };
const obj2 = {
	property: "value",
	nextLevel: {
		secondProperty: "secondValue",
		thirdLevel: {
			thirdProperty: "thirdValue"
		}
	}
};



helper.isEmpty(obj1)
//засунул isObject в консоль лог, потому что использую его во всех остальных функциях для проверки на валидность аргументов
console.log(helper.isObject(obj1));

//проверка клонирования
let clone = helper.deepClone(obj2);
if (clone) {
	clone.nextLevel.secondProperty = 'PROVERKA';
	console.log(`Клонированный объект с изменённым свойством secondProperty:`, clone);
	console.log(`Исходный объект не изменился`, obj2);
}


helper.isEqual(obj1, obj2)

helper.findValue(obj2, 'thirdLevel')

helper.hasKey(obj2, "thirdLevel")

//проверка "замораживания свойств"
let a = Object.getPrototypeOf(helper)
console.log(Object.getOwnPropertyDescriptor(a, 'deepClone'));
a.deepClone = 'sdfsdf';

