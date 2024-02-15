class PreparingPage extends Page {
	constructor(onStateChange) {
		super("bodyPreparing", true)
		this.onStateChange = onStateChange
		
		this.dictationPreparingBlock = new Block("dictationPreparing")

		this.dictationExerciseCount = new CountControl("dictationPreparingExerciseCount")
		this.dictationPreparingNumberCount = new CountControl("dictationPreparingNumberCount")
		this.dictationOperandCount = new CountControl("dictationPreparingOperandCount")
		this.dictationLevel = new SelectControl("dictationPreparingLevel")
		this.dictationTimeSolving = new RangeControl("dictationPreparingTimeSolving")
		this.dictationTimeChecking = new RangeControl("dictationPreparingTimeChecking")
		
		this.dictationExerciseCount.onChange((value) => {
			this.onStateChange({
				step: "preparing",
				trainingType: "dictation",
				exerciseCount: value
			})
		})

		this.dictationPreparingNumberCount.onChange((value) => {
			this.onStateChange({
				step: "preparing",
				trainingType: "dictation",
				numberCount: value
			})
		})

		this.dictationOperandCount.onChange((value) => {
			this.onStateChange({
				step: "preparing",
				trainingType: "dictation",
				operandCount: value
			})
		})

		this.dictationLevel.onChange((value) => {
			this.onStateChange({
				step: "preparing",
				trainingType: "dictation",
				level: value
			})
		})

		this.dictationTimeSolving.onChange((value) => {
			this.onStateChange({
				step: "preparing",
				trainingType: "dictation",
				timeSolving: value
			})
		})


		this.dictationTimeChecking.onChange((value) => {
			this.onStateChange({
				step: "preparing",
				trainingType: "dictation",
				timeChecking: value
			})
		})

		new Button("dictationPreparingStart").onClick(
			() => this.onStateChange({
				step: "training",
				trainingType: "dictation",
			})
		)

		new Button("dictationPreparingBack").onClick(
			() => this.onStateChange({
				step: "intro"
			})
		)


		this.testPreparingBlock = new Block("testPreparing")

		this.testExerciseCount = new CountControl("testPreparingExerciseCount")
		this.testPreparingNumberCount = new CountControl("testPreparingNumberCount")
		this.testOperandCount = new CountControl("testPreparingOperandCount")
		this.testLevel = new SelectControl("testPreparingLevel")
		this.testTimeSolving = new RangeControl("testPreparingTimeSolving")
		
		this.testExerciseCount.onChange((value) => {
			this.onStateChange({
				step: "preparing",
				trainingType: "test",
				exerciseCount: value
			})
		})

		this.testPreparingNumberCount.onChange((value) => {
			this.onStateChange({
				step: "preparing",
				trainingType: "test",
				numberCount: value
			})
		})

		this.testOperandCount.onChange((value) => {
			this.onStateChange({
				step: "preparing",
				trainingType: "test",
				operandCount: value
			})
		})

		this.testLevel.onChange((value) => {
			this.onStateChange({
				step: "preparing",
				trainingType: "test",
				level: value
			})
		})

		this.testTimeSolving.onChange((value) => {
			this.onStateChange({
				step: "preparing",
				trainingType: "test",
				timeSolvingTest: value
			})
		})

		new Button("testPreparingStart").onClick(
			() => this.onStateChange({
				step: "training",
				trainingType: "test",
			})
		)
		
		new Button("testPreparingBack").onClick(
			() => this.onStateChange({
				step: "intro"
			})
		)
	}
	
	render(state) {
		if (state.step === 'preparing') {
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
			this.show()
		} else {
			this.dictationPreparingBlock.hide()
			this.testPreparingBlock.hide()
			this.hide()
		}
	}
}