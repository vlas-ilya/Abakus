class Page extends Block {
	constructor(selector, step, onStateChange, flex) {
		super(selector, flex)
		this.step = step
		this.onStateChange = onStateChange
	}

	setState(state) {
		this.onStateChange(state)
	}

	updateStateOnChange(control, field) {
		control.onChange((value) => {
			this.setState({[field]: value})
		})
	}

	updateStateOnClick(control, state) {
		control.onClick((value) => {
			this.setState(state)
		})
	}

	render(state) {
		if (state.step === this.step) {
			this.onShow(state)
			this.show()
		} else {
			this.onHide(state)
			this.hide()
		}
	}

	onShow(state) {

	}

	onHide(state) {

	}
}
