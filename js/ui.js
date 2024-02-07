class UI {
	constructor() {
		this.state = {
			step: "loading",
			trainingType: "dictation",
			numberCount: 2,
			exerciseCount: 10,
			operandCount: 3,
			level: "Простые формулы",
			timeSolving: 5,
			timeChecking: 5,
			timeSolvingTest: 60,
			exercises: [],
		}

		this.uiItems = [
			new LoaderPage(this.setState.bind(this)),
			new BodyPage(this.setState.bind(this)),
			new IntroPage(this.setState.bind(this)),
			new PreparingPage(this.setState.bind(this)),
			new TrainingPage(this.setState.bind(this)),
		]
	}

	setState(state) {
		console.log("Update: ", state)
		console.log("Old state: ", this.state)
		if (this.state.step !== 'training' && state.step === 'training') {
			this.state.exercises = []
			generate(
				this.state.exerciseCount, 
				this.state.numberCount, 
				this.state.operandCount, 
				this.state.level,
				this.setState.bind(this)
			)
		}
		this.state = { ...this.state, ...state }
		this.uiItems.forEach(item => item.render(this.state))
		console.log("New state: ", this.state)
	}

	run() {
		stopWebWorker()
		this.setState({ step: "intro" })
	}
}
