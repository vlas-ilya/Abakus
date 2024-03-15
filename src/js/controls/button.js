class Button extends Block {

	constructor(selector) {
		super(selector)
		this.onClickCallbacks = []

		this.control.addEventListener(
			'click', 
			() => {
				this.onClickCallbacks.forEach(callback => callback())
			}, 
			false
		)
	}

	onClick(callback) {
		this.onClickCallbacks.push(callback)
	}
}
