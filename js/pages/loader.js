class LoaderPage extends Page {
	constructor() {
		super()
		this.control = new Block("loader")
	}

	render(state) {
		if (state.step === 'loading') {
			this.control.show()
		} else {
			this.control.hide()
		}
	}
}