class Block {
	constructor(selector, flex = false) {
		this.control = document.getElementsByClassName(selector)[0]
		this.flex = flex
	}

	hide() {
		this.control.style.display = "none"
	}

	show() {
		this.control.style.display = this.flex ? "flex" : "block"
	}

	clear() {
		this.control.innerHTML = ""
	}
}
