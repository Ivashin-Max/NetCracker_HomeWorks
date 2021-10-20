class Leave {
	constructor(val) {
		this.value = val;
		this.left = null;
		this.right = null;
	}
}

class Tree {
	constructor() {
		this.start = null;
	}
}

const tree = new Tree();
console.log(tree);