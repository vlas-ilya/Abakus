class LoaderPage extends Page {
	constructor() {
		super()
		this.control = new Block("Loader")
	}

	render(state) {
		if (state.step === 'loading') {
			this.control.show()
		} else {
			this.control.hide()
		}
	}
}