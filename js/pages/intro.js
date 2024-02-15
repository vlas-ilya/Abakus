class IntroPage extends Page {
	constructor(onStateChange) {
		super("bodyIntro", true)
		this.onStateChange = onStateChange

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
			this.show()
		} else {
			this.hide()
		}
	}
}
