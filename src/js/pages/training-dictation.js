class TrainingDictation {
    constructor(setState, timerBody, timer) {
        this.setState = setState
        this.dictationTraining = new Block("dictationTraining", true)
        this.timerBody = timerBody
        this.timer = timer
    }

    hide() {
        clearInterval(this.interval)
        this.dictationTraining.hide()
    }

    showExercises(timeSolving, timeChecking, exercises) {
        this.timer.setText(timeSolving)
        this.timerBody.show()
        this.dictationTraining.show()

        this.exercisesCount = exercises.length
        this.currentExercise = 1

        this.startTimer(exercises, "solving", timeSolving, timeChecking, (type, exercise) => {
            this.dictationTraining.clear()
            if (type === "finish") {
                this.timer.clear()
                apply(this.dictationTraining.control, root => {
                    add(root, "div", div => {
                        add(div, 'button', button => {
                            add(button, document.createTextNode("Попробовать еще раз?"))
                            button.classList.add("Actions_Button")
                            button.classList.add("secondary")
                            button.addEventListener(
                                'click',
                                () => this.setState({step: "preparing"}),
                                false
                            )
                        })
                    })
                })
            } else if (type === "solving") {
                apply(this.dictationTraining.control, root => {
                    add(root, "div", div => {
                        div.classList.add("DictationTraining_Number")
                        add(div, document.createTextNode(`${this.currentExercise} из ${this.exercisesCount}`))
                    })
                    add(root, "div", div => {
                        div.classList.add("DictationTraining_Solving")
                        add(div, document.createTextNode(exercise[0]))
                    })
                    add(root, 'button', button => {
                        add(button, document.createTextNode("Закончить"))
                        button.classList.add("Actions_Button")
                        button.classList.add("secondary")
                        button.addEventListener(
                            'click',
                            () => this.setState({step: "preparing"}),
                            false
                        )
                    })
                })
            } else {
                apply(this.dictationTraining.control, root => {
                    add(root, "div", div => {
                        div.classList.add("DictationTraining_Number")
                        add(div, document.createTextNode(`${this.currentExercise} из ${this.exercisesCount}`))
                    })
                    add(root, "div", div => {
                        div.classList.add("DictationTraining_Checking")
                        add(div, document.createTextNode("Ответ: " + exercise[1]))
                    })
                    add(root, 'button', button => {
                        add(button, document.createTextNode("Закончить"))
                        button.classList.add("Actions_Button")
                        button.classList.add("secondary")
                        button.addEventListener(
                            'click',
                            () => this.setState({step: "preparing"}),
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
                if (type === "checking") {
                    exercises = exercises.slice(1)
                    this.currentExercise += 1
                }
                this.startTimer(
                    exercises,
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
