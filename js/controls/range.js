class RangeControl extends Block {
	constructor(selector, minValue, maxValue, value) {
		super(selector)
		this.minValue = minValue || 1 * this.control.min || 0
		this.maxValue = maxValue || 1 * this.control.max || 0
		this.value = Math.max(this.minValue, Math.min(this.maxValue, value || 1 * this.control.value || 0))
		this.onChangeCallbacks = []
		this.control.addEventListener(
			"change", 
			(event) => {
				if (1 * event.target.value === this.value) {
					return
				}
				this.onChangeCallbacks.forEach(callback => callback(Math.max(this.minValue, Math.min(this.maxValue, 1 * event.target.value))))
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
		if (value !== undefined && this.value !== value) {
			this.value = value
			this.render()
		}
	}

	onChange(callback) {
		this.onChangeCallbacks.push(callback)
	}

	updateState(setState, field) {
		this.onChange((value) => {
			setState({ [field]: value})
		})
	}
}
