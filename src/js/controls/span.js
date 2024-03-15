class Span extends Block {
	constructor(selector, flex) {
		super(selector, flex)
	}

	setText(text) {
		this.control.innerHTML = text
	}
}