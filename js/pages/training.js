class TrainingPage extends Page {
	constructor(onStateChange) {
		super()
		this.onStateChange = onStateChange

		this.control = new Block("body-training")
		this.trainingLoader = new Block("trainingLoader")
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
			this.trainingLoader.hide()
			return
		}

		this.dictationTraining.hide()
		this.testTraining.hide()
		this.timerBody.hide()
		this.trainingLoader.show()

		if (state.exercises.length > 0) {
			this.trainingLoader.hide()
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
