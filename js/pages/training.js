class TrainingPage extends Page {
	constructor(onStateChange) {
		super()
		this.onStateChange = onStateChange

		this.control = new Block("body-training")
		this.dictationTraining = new TrainingDictation(this.onStateChange)
		this.testTraining = new TrainingTest(this.onStateChange)

		this.timerBody = new Block("trainingTimer")
		this.timer = new Span("trainingTimer-timer")
	}

	render(state) {
		if (state.step !== 'training') {
			this.dictationTraining.hide()
			this.testTraining.hide()
			this.timerBody.hide()
			this.control.hide()
			return
		}

		this.dictationTraining.hide()
		this.testTraining.hide()
		this.timerBody.hide()

		if (state.exercises.length > 0) {
			if (state.trainingType === "dictation") {
				this.dictationTraining.showExercises(
					state.timeSolving, 
					state.timeChecking, 
					state.exercises
				)
			} else {
				this.testTraining.showExercises(
					state.timeSolvingTest, 
					state.exercises
				)
			}
		}

		this.control.show()
	}
}
