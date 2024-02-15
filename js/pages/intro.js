class IntroPage extends Page {
    constructor(onStateChange) {
        super("bodyIntro", 'intro', onStateChange, true)

        this.updateStateOnClick(new Button("dictationInfo"), {
            step: "preparing",
            trainingType: "dictation",
        })

        this.updateStateOnClick(new Button("testInfo"), {
            step: "preparing",
            trainingType: "test",
        })
    }
}
