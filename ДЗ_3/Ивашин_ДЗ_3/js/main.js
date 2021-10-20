
function submit1() {
	window.event.preventDefault();
	const myNull = null;					//проверка на null,undefiend и всё остальное, что не является строкой проходит
	const textareaValue = document.getElementById('textarea').value;
	getTopWord(textareaValue);

}


function getTopWord(string) {
	const notAllowed = 'Недопустимое значение';
	const topWords = [];
	const map = {};
	if (typeof string === "string") {
		const arr = string.split(' ');    											//разбили строку на массив
		let trimArr = arr.filter((el) => el != '');								//убрали лишние пробелы
		let lowerCaseArr = trimArr.map((el) => el.toLowerCase());			//привели все элементы к нижнему регистру
		let deleteShortWords = lowerCaseArr.filter((el) => el.length > 3)	//чтоб избавиться от "он, в, оно" и т.п. вот такой глупый метод

		for (let i = 0; i < deleteShortWords.length; i++) {					//прошли по массиву и преобразовали его в объект где ключ - слово, 
			if (map[deleteShortWords[i]] != null) {								//а значение = кол-ву слов в тексте
				map[deleteShortWords[i]] += 1;
			} else {
				map[deleteShortWords[i]] = 1;
			}
		}

		for (let i = 0; i < 3; i++) {																			//цикл для поиска топ 3 слов
			const topWord = (findMaxValueInObj(map))														//нашли топ слово
			alert(`Топ ${i + 1} cлово ${topWord}, оно встречается в тексте ${map[topWord]} раз(a)`)		//вывели на экран
			delete map[topWord];																					//удалили это свойство из объекта
		}

	}
	else {
		alert(notAllowed);
		return notAllowed
	}
}

function findMaxValueInObj(obj) {
	let maxValue = 0;
	let keyVal;

	for (let key in obj) {								//прошли по объекту и сравнили все его свойства, выбрали максимальное
		let tempValue = obj[key];
		if (maxValue < tempValue) {
			maxValue = tempValue;
			keyVal = key;
		}
	}
	console.log(keyVal);
	return keyVal
}