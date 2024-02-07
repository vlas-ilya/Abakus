class BodyPage extends Page {
	constructor() {
		super()
		this.control = new Block("body", true)
	}

	render(state) {
		if (state.step !== 'loading') {
			this.control.show()
		} else {
			this.control.hide()
		}
	}
}