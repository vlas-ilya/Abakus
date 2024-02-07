class TrainingTest {
	constructor(onStateChange) {
		this.onStateChange = onStateChange
		this.control = new Block("body-training")
		this.testTraining = new Block("testTraining")
		this.timerBody = new Block("trainingTimer")
		this.timer = new Span("trainingTimer-timer")
	}

	hide() {
		clearInterval(this.interval)
		this.testTraining.hide()
	}

	showExercises(timeSolvingTest, exercises) {
		this.timer.setText(timeSolvingTest)
		this.timerBody.show()

		const apply = (obj, lambda) => {
			lambda(obj)
			return obj
		}

		const add = (obj, type, lambda) => {
			if (typeof type == 'string') {
				obj.appendChild(apply(document.createElement(type), lambda))
			} else {
				obj.appendChild(type)
			}
			return obj
		}

		this.testTraining.clear()

		apply(this.testTraining.control, root => {
			add(root, "table", table => {
				table.classList.add("testTrainingTable")
				add(table, "thead", thead => {
					add(thead, "tr", tr => {
						add(tr, "th", th => {
							add(th, document.createTextNode("Задание"))
						})
						add(tr, "th", th => {
							add(th, document.createTextNode("Ответ"))
						})
					})
				})
				add(table, "tbody", thead => {
					exercises.forEach(exercise => {
						add(thead, "tr", tr => {
							add(tr, "td", td => {
								add(td, document.createTextNode(exercise[0]))
							})
							add(tr, "td", td => {
								add(td, "input", input => {
									input.setAttribute("answer", exercise[1])
									input.setAttribute("type", "number")
									input.classList.add("testTrainingTable-input")
								})
							})
						})
					})
				})
			})
			add(root, "div", div => {
				div.classList.add("actions")
				add(div, 'button', button => {
					add(button, document.createTextNode("Проверить"))
					button.classList.add("actions-button")
					button.classList.add("primary")
					button.addEventListener(
						'click', 
						() => {
							debugger
						},
						false
					)
				})
				add(div, 'button', button => {
					add(button, document.createTextNode("Назад"))
					button.classList.add("actions-button")
					button.classList.add("secondary")
					button.addEventListener(
						'click', 
						() => {
							this.onStateChange({ step: "preparing" })
						}, 
						false
					)
				})
			})
		})


		this.testTraining.show()

		this.startTimer(timeSolvingTest, () => {
			
		})
	}

	startTimer(timeSolvingTest, callback) {
		const currentTime = new Date()
		this.interval = setInterval(() => {
			const time = timeSolvingTest - Math.floor((new Date() - currentTime) / 1000)
			if (time < 0) {
				clearInterval(this.interval)
				callback()
				return
			}
			this.timer.setText(time)
		}, 100)
	}
}