class TrainingDictation {
    constructor(onStateChange) {
        this.onStateChange = onStateChange
        this.control = new Block("body-training")
        this.dictationTraining = new Page("dictationTraining", true)
        this.timerBody = new Block("trainingTimer")
        this.timer = new Span("trainingTimer-timer")
    }

    hide() {
        clearInterval(this.interval)
        this.dictationTraining.hide()
    }

    showExercises(timeSolving, timeChecking, exercises) {
        this.timer.setText(timeSolving)
        this.dictationTraining.show()
        this.timerBody.show()

        this.startTimer(exercises, "solving", timeSolving, timeChecking, (type, exercise) => {
            this.dictationTraining.clear()
            if (type === "finish") {
                this.timerBody.clear()
                apply(this.dictationTraining.control, root => {
                    add(root, "div", div => {
                        add(div, 'button', button => {
                            add(button, document.createTextNode("Попробовать еще раз?"))
                            button.classList.add("actions-button")
                            button.classList.add("secondary")
                            button.addEventListener(
                                'click',
                                () => {
                                    this.onStateChange({step: "preparing"})
                                },
                                false
                            )
                        })
                    })
                })
            }
            if (type === "solving") {
                apply(this.dictationTraining.control, root => {
                    add(root, "div", div => {
                        div.classList.add("dictationTraining-solving")
                        add(div, document.createTextNode(exercise[0]))
                    })
                    add(root, 'button', button => {
                        add(button, document.createTextNode("Назад"))
                        button.classList.add("actions-button")
                        button.classList.add("secondary")
                        button.addEventListener(
                            'click',
                            () => {
                                this.onStateChange({step: "preparing"})
                            },
                            false
                        )
                    })
                })
            } else {
                apply(this.dictationTraining.control, root => {
                    add(root, "div", div => {
                        div.classList.add("dictationTraining-checking")
                        add(div, document.createTextNode("Ответ: " + exercise[1]))
                    })
                    add(root, 'button', button => {
                        add(button, document.createTextNode("Назад"))
                        button.classList.add("actions-button")
                        button.classList.add("secondary")
                        button.addEventListener(
                            'click',
                            () => {
                                this.onStateChange({step: "preparing"})
                            },
                            false
                        )
                    })
                })
            }
        })
    }

    startTimer(exercises, type, timeSolving, timeChecking, callback) {
        if (exercises.length === 0) {
            callback("finish")
            return
        }

        callback(type, exercises[0])

        const currentTime = new Date()
        this.interval = setInterval(() => {
            const time = (type === "solving" ? timeSolving : timeChecking) - Math.floor((new Date() - currentTime) / 1000)
            if (time < 0) {
                clearInterval(this.interval)
                this.startTimer(
                    exercises.slice(1),
                    type === "solving" ? "checking" : "solving",
                    timeSolving,
                    timeChecking,
                    callback
                )
                return
            }
            this.timer.setText(time)
        }, 100)
    }
}
