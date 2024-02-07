class TrainingTest {
    constructor(onStateChange) {
        this.onStateChange = onStateChange
        this.control = new Block("body-training")
        this.testTraining = new Block("testTraining")
        this.timerBody = new Block("trainingTimer")
        this.timer = new Span("trainingTimer-timer")
    }

    hide() {
        clearInterval(this.interval)
        this.testTraining.hide()
    }

    showExercises(timeSolvingTest, exercises) {
        this.timer.setText(timeSolvingTest)
        this.exercises = exercises

        this.showUI(exercises, false)

        this.startTimer(timeSolvingTest, () => {
            this.timerBody.hide()
            this.showUI(exercises, true)
        })

        this.timerBody.show()
        this.testTraining.show()

    }

    showUI(exercises, showAnswers) {
        this.testTraining.clear()

        apply(this.testTraining.control, root => {
            add(root, "table", table => {
                table.classList.add("testTrainingTable")
                add(table, "thead", thead => {
                    add(thead, "tr", tr => {
                        add(tr, "th", th => {
                            add(th, document.createTextNode("Задание"))
                        })
                        add(tr, "th", th => {
                            add(th, document.createTextNode("Ответ"))
                        })
                    })
                })
                add(table, "tbody", thead => {
                    exercises.forEach(exercise => {
                        add(thead, "tr", tr => {
                            add(tr, "td", td => {
                                add(td, document.createTextNode(exercise[0]))
                            })
                            add(tr, "td", td => {
                                if (!showAnswers) {
                                    add(td, "input", input => {
                                        input.setAttribute("answer", exercise[1])
                                        input.setAttribute("type", "number")
                                        input.classList.add("testTrainingTable-input")
                                        input.addEventListener(
                                            "change",
                                            (event) => exercise[2] = 1 * event.target.value,
                                            false,
                                        )
                                    })
                                } else {
                                    if (exercise[1] === exercise[2]) {
                                        add(td, "span", span => {
											span.classList.add("correct")
                                            add(span, document.createTextNode(exercise[1]))
                                        })
                                    } else {
                                        if (exercise[2] !== undefined) {
                                            add(td, "span", span => {
                                                span.classList.add("incorrect")
                                                add(span, "span", span => {
                                                    add(span, document.createTextNode(exercise[2] || ""))
                                                })
                                            })
                                        }
										add(td, "span", span => {
											span.classList.add("correct")
											add(span, document.createTextNode(exercise[1]))
										})
                                    }
                                }
                            })
                        })
                    })
                })
            })
            add(root, "div", div => {
                div.classList.add("actions")
                if (!showAnswers) {
                    add(div, 'button', button => {
                        add(button, document.createTextNode("Проверить"))
                        button.classList.add("actions-button")
                        button.classList.add("primary")
                        button.addEventListener(
                            'click',
                            () => {
                                clearInterval(this.interval)
                                this.timerBody.hide()
                                this.showUI(this.exercises, true)
                            },
                            false
                        )
                    })
                }
                add(div, 'button', button => {
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
        })
    }

    startTimer(timeSolvingTest, callback) {
        const currentTime = new Date()
        this.interval = setInterval(() => {
            const time = timeSolvingTest - Math.floor((new Date() - currentTime) / 1000)
            if (time < 0) {
                clearInterval(this.interval)
                callback()
                return
            }
            this.timer.setText(time)
        }, 100)
    }
}