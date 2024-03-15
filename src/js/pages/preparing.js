class PreparingPage extends Page {
    constructor(onStateChange) {
        super("bodyPreparing", "preparing", onStateChange, true)

        this.initDictationPreparingBlock()
        this.initTestPreparingBlock()
    }

    initDictationPreparingBlock() {
        this.dictationPreparingBlock = new Block("dictationPreparing")

        this.dictationExerciseCount = new CountControl("dictationPreparingExerciseCount")
        this.dictationPreparingNumberCount = new CountControl("dictationPreparingNumberCount")
        this.dictationOperandCount = new CountControl("dictationPreparingOperandCount")
        this.dictationLevel = new SelectControl("dictationPreparingLevel")
        this.dictationTimeSolving = new RangeControl("dictationPreparingTimeSolving")
        this.dictationTimeChecking = new RangeControl("dictationPreparingTimeChecking")

        this.updateStateOnChange(this.dictationExerciseCount, "exerciseCount")
        this.updateStateOnChange(this.dictationPreparingNumberCount, "numberCount")
        this.updateStateOnChange(this.dictationOperandCount, "operandCount")
        this.updateStateOnChange(this.dictationLevel, "level")
        this.updateStateOnChange(this.dictationTimeSolving, "timeSolving")
        this.updateStateOnChange(this.dictationTimeChecking, "timeChecking")
        this.updateStateOnClick(new Button("dictationPreparingStart"), {step: "training"})
        this.updateStateOnClick(new Button("dictationPreparingBack"), {step: "intro"})
    }

    initTestPreparingBlock() {
        this.testPreparingBlock = new Block("testPreparing")

        this.testExerciseCount = new CountControl("testPreparingExerciseCount")
        this.testPreparingNumberCount = new CountControl("testPreparingNumberCount")
        this.testOperandCount = new CountControl("testPreparingOperandCount")
        this.testLevel = new SelectControl("testPreparingLevel")
        this.testTimeSolving = new RangeControl("testPreparingTimeSolving")

        this.updateStateOnChange(this.testExerciseCount, "exerciseCount")
        this.updateStateOnChange(this.testPreparingNumberCount, "numberCount")
        this.updateStateOnChange(this.testOperandCount, "operandCount")
        this.updateStateOnChange(this.testLevel, "level")
        this.updateStateOnChange(this.testTimeSolving, "timeSolvingTest")
        this.updateStateOnClick(new Button("testPreparingStart"), {step: "training"})
        this.updateStateOnClick(new Button("testPreparingBack"), {step: "intro"})
    }

    onShow(state) {
        if (state.trainingType === "dictation") {
            this.dictationPreparingBlock.show()
            this.dictationExerciseCount.setValue(state.exerciseCount)
            this.dictationPreparingNumberCount.setValue(state.numberCount)
            this.dictationOperandCount.setValue(state.operandCount)
            this.dictationLevel.setValue(state.level)
            this.dictationTimeSolving.setValue(state.timeSolving)
            this.dictationTimeChecking.setValue(state.timeChecking)
        } else {
            this.testPreparingBlock.show()
            this.testExerciseCount.setValue(state.exerciseCount)
            this.testPreparingNumberCount.setValue(state.numberCount)
            this.testOperandCount.setValue(state.operandCount)
            this.testLevel.setValue(state.level)
            this.testTimeSolving.setValue(state.timeSolvingTest)
        }
    }

    onHide(state) {
        this.dictationPreparingBlock.hide()
        this.testPreparingBlock.hide()
    }
}