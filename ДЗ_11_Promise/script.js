
let promise = Promise.resolve()

promise
	.then(() => {
		let q = 1
		alert(`Первый then, значение переменной равно ${q}`)
		return q
	})
	.then(res => {
		alert(`Это второй then, выводим значение переменной из первого then:${res}`)
		return res
	})
	.then(res => alert(`Это третий then, выводим значение из второго then:${res}`))