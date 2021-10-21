class Leave {						//Класс отдельного листа
	constructor(val) {
		this.value = val;
		this.left = null;
		this.right = null;
	}
}

class Tree {						//Класс для всего дерева
	constructor() {
		this.start = null;		//Стартовая нода
		this.typeOfTree = null;	//Тип дерева
	}

	addLeave(value) {									//Метод добавления листочков
		const newLeave = new Leave(value)
		if (!this.start) {
			this.start = newLeave;
			this.typeOfTree = typeof (value);	//Проверяем тип первой ноды
			return
		}

		let currentLeave = this.start;

		while (currentLeave) {
			if (typeof (newLeave.value) !== this.typeOfTree) {		//Запрещаем добавлять листы, 
				console.log('Нельзя вводить листы разных типов');	//отличные по типу от стартового
				return
			}
			if (newLeave.value >= currentLeave.value) {	//Если значение больше корня
				if (!currentLeave.right) {						//И там не существует листа - тогда кладём вправо
					currentLeave.right = newLeave;
					return
				}
				currentLeave = currentLeave.right			//или идём глубже
			} else {
				if (!currentLeave.left) {						//и наоборот с левой стороной
					currentLeave.left = newLeave;
					return
				}
				currentLeave = currentLeave.left
			}
		}
		return
	}

	showTree(leave) {								//рекурсивный обход
		if (leave) {
			this.showTree(leave.left);
			this.showTree(leave.right);
			console.log(leave.value);
		}
	}

}

const tree = new Tree();

tree.addLeave(50);						//добавление цифр в дерево
tree.addLeave(18);
tree.addLeave(60);
tree.addLeave(21);
tree.addLeave(34);
tree.addLeave(51);
tree.addLeave(57);
tree.addLeave(67);
tree.addLeave(49);
console.log(tree);

// tree.addLeave('vbn');			//добавление стринг в дерево
// tree.addLeave('vsdf');
// tree.addLeave('vwr');
// tree.addLeave('vw224');
// tree.addLeave('vss');
// tree.addLeave('asda');
// tree.addLeave('qwe');
// tree.addLeave('123');
// tree.addLeave('qaz');
// console.log(tree);

tree.showTree(tree.start);			//обход дерева в глубину