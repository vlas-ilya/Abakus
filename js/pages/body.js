class BodyPage extends Page {
	constructor() {
		super("body", "", () => {}, true)
	}

	render(state) {
		if (state.step !== "loading") {
			this.show()
		} else {
			this.hide()
		}
	}
}