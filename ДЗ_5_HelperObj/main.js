// Нужно написать вспомогательный объект, у которого будет ряд методов для работы с объектами.
// Методы должны быть обязательно неизменяемыми (используйте defineProperty).
// Методы:

// isEmpty(obj): boolean - проверка переданного объекта на пустоту
// isObject(obj): boolean - является ли переданное значение объектом.
// deepClone(obj): object - делает полную копию
// isEqual(obj1, obj2): boolean - выполняет сравнение двух объектов.
// findValue(obj, key): value - находит по заданному ключу первое попавшееся значение
// hasKey(obj, key): boolean - проверка наличия свойства у объекта.

// Так как во всех методах идёт работа с объектами - обязательно делайте проверку типа.

// В итоге должно получиться что-то типа такого:

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

// const helper = new Helper();

// const isEqual = helper.isEqual(obj1, obj2) // false
// const findValue = helper.findValue(obj2, "thirdLevel") // {thirdProperty: "thirdValue"}
// const clonedObject = helper.deepClone(obj1); // clonedObject: {property: "value"}