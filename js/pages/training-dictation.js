class TrainingDictation {
	constructor(onStateChange) {
		this.onStateChange = onStateChange
		this.control = new Block("body-training")
		this.dictationTraining = new Page("dictationTraining")
		this.timerBody = new Block("trainingTimer")
		this.timer = new Span("trainingTimer-timer")
	}

	hide() {
		clearInterval(this.interval)
		this.dictationTraining.hide()
	}

	showExercises(timeSolving, timeChecking, exercises) {
		this.timer.setText(timeSolving)
		this.dictationTraining.show()
		this.timerBody.show()

		this.startTimer(exercises, "solving", timeSolving, timeChecking, (type, exercise) => {
			if (type === "finish") {
				return
			}
			if (type === "solving") {
				// TODO
			} else {
				// TODO
			}
		})
	}

	startTimer(exercises, type, timeSolving, timeChecking, callback) {
		if (exercises.length === 0) {
			callback("finish")
			return
		}

		callback(type, exercises[0])

		const currentTime = new Date()
		this.interval = setInterval(() => {
			const time = (type === "solving" ? timeSolving : timeChecking) - Math.floor((new Date() - currentTime) / 1000)
			if (time < 0) {
				clearInterval(this.interval)
				this.startTimer(
					exercises.slice(1), 
					type === "solving" ? "checking" : "solving", 
					timeSolving, 
					timeChecking, 
					callback
				)
				return
			}
			this.timer.setText(time)
		}, 100)
	}
}
