class Page extends Block {
	constructor(selector, flex) {
		super(selector, flex)
		this.body = new Block("body");
		this.content = ""
	}

	render(state) {

	}
}
