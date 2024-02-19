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
            this.savePreference()
        }
        if (this.state.step !== 'preparing' && state.step === 'preparing') {
            this.loadPreference(state.trainingType)
        }
        this.state = {...this.state, ...state}
        this.uiItems.forEach(item => item.render(this.state))
        console.log("New state: ", this.state)
    }

    savePreference() {
        savePreference(
            this.state.trainingType,
            {
                numberCount: this.state.numberCount,
                exerciseCount: this.state.exerciseCount,
                operandCount: this.state.operandCount,
                level: this.state.level,
                timeSolving: this.state.timeSolving,
                timeChecking: this.state.timeChecking,
                timeSolvingTest: this.state.timeSolvingTest,
            }
        )
    }

    loadPreference(trainingType) {
        const preference = getPreference(trainingType)
        this.state.numberCount = preference.numberCount || this.state.numberCount
        this.state.exerciseCount = preference.exerciseCount || this.state.exerciseCount
        this.state.operandCount = preference.operandCount || this.state.operandCount
        this.state.level = preference.level || this.state.level
        this.state.timeSolving = preference.timeSolving || this.state.timeSolving
        this.state.timeChecking = preference.timeChecking || this.state.timeChecking
        this.state.timeSolvingTest = preference.timeSolvingTest || this.state.timeSolvingTest
    }

    run() {
        stopWebWorker()
        this.setState({step: "intro"})
    }
}
