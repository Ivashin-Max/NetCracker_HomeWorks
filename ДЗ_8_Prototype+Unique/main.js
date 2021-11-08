
//Unique------------------------------
let simpleArr = [1, 2, 3, 3, 4, 6, '11', '11', '2'];
let objectArr = [{ id: 1, name: 'Vasya' }, { id: 2, name: 'Petya' }, { age: 18, name: 'Max' }, { age: 19, name: 'Max' }, { age: 146, name: 'Max' },]



Array.prototype.unique = function () {
	if (!arguments.length) return [...new Set(this)];

	const uniqueKey = arguments[0];

	let firstUniqueObj;
	for (let i = 0; i < this.length; i++) {
		const element = this[i];
		if (element.hasOwnProperty(uniqueKey)) {
			firstUniqueObj = element;

			break
		}
	}
	let filtredArr = this.filter(el => !el.hasOwnProperty(uniqueKey))
	let resultArr = [firstUniqueObj, ...filtredArr]
	return resultArr

}
console.log(`Unique_test---`);
console.log(`Исходный массив примитивов`, simpleArr);
console.log(`Исходный "сложный" массив `, objectArr);
console.log(`Возврат уникального массива из примитивов`, simpleArr.unique());
console.log(`Возврат уникального массива из "сложного" массива по ключу id`, objectArr.unique('id'));
console.log(`Возврат уникального массива из "сложного" массива по ключу name`, objectArr.unique('age'));



//Prototype-------------------------
console.log('Prototype test------------');
function inherit(ParentClass) {
	function ChildClass() { }
	ChildClass.prototype = Object.create(ParentClass.prototype);
	ChildClass.prototype.constructor = ChildClass;
	ChildClass.prototype._super = ParentClass.prototype;
	return ChildClass;
}

function Parent() { };
Parent.prototype.init = function (name) {
	this.name = name;
};

Parent.prototype.print = function () {
	console.log(this.name);
};

//Функция наследования из презентации
let Child = inherit(Parent);
Child.prototype.init =
	function (name) {
		name = 'Mr. ' + name;
		//переопределние метода через супер
		this._super.init.call(this, name);
	}

let max = new Child();

max.init('Max');

max.print();


//Вложенность

let first = {
	name: 'First',
	sayHi() {
		console.log("Hi,", this.name);
	}
}

let second = {
	age: 23,
	__proto__: first
};

let third = {
	isPretty: true,
	__proto__: second
}

//Третий наследует от первого
third.sayHi()
//И от второго тоже
console.log(third.age);



