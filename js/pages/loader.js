class LoaderPage extends Page {
	constructor() {
		super("loader")
	}

	render(state) {
		if (state.step === 'loading') {
			this.show()
		} else {
			this.hide()
		}
	}
}