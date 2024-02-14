class IntroPage extends Page {
	constructor(onStateChange) {
		super()
		this.onStateChange = onStateChange
		this.control = new Block("Body-Intro", true)

		new Button("dictationInfo").onClick(() => {
			this.onStateChange({
				step: "preparing",
				trainingType: "dictation",
			})
		})

		new Button("testInfo").onClick(() => {
			this.onStateChange({
				step: "preparing",
				trainingType: "test",
			})
		})
	}
	
	render(state) {
		if (state.step === 'intro') {
			this.control.show()
		} else {
			this.control.hide()
		}
	}
}