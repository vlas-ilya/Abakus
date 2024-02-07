class SelectControl extends Block {
	constructor(selector, value, options) {
		super(selector)
		this.value = value
		this.options = options
		this.onChangeCallbacks = []
		this.control.addEventListener(
			"change", 
			(event) => {
				this.onChangeCallbacks.forEach(callback => callback(event.target.value))
				this.render()
			},
			false,
		)
		this.render()
	}

	render() {
		this.control.value = this.value
	}

	setValue(value) {
		if (value !== undefined) {
			this.value = value
			this.render()
		}
	}

	onChange(callback) {
		this.onChangeCallbacks.push(callback)
	}
}
