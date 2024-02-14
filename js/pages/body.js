class BodyPage extends Page {
	constructor() {
		super()
		this.control = new Block("Body", true)
	}

	render(state) {
		if (state.step !== 'loading') {
			this.control.show()
		} else {
			this.control.hide()
		}
	}
}