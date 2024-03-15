class TrainingPage extends Page {
    constructor(onStateChange) {
        super("bodyTraining", "training", onStateChange)

        this.timerBody = new Block("trainingTimerBody")
        this.timer = new Span("trainingTimer")

        this.trainingLoader = new Block("trainingLoader")
        this.dictationTraining = new TrainingDictation(this.onStateChange, this.timerBody, this.timer)
        this.testTraining = new TrainingTest(this.onStateChange, this.timerBody, this.timer)
    }

    onShow(state) {
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
    }

    onHide(state) {
        this.dictationTraining.hide()
        this.testTraining.hide()
        this.timerBody.hide()
        this.trainingLoader.hide()
    }
}
