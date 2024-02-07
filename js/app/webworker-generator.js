//
// Plus
//
function isSimplePlus(a, b) {
    if (a == 0 && b >= 0 && b <= 9) return true
    if (a == 1 && b >= 0 && b <= 8 && b != 4) return true
    if (a == 2 && b >= 0 && b <= 7 && b != 3 && b != 4) return true
    if (a == 3 && b >= 0 && b <= 6 && b != 2 && b != 3 && b != 4) return true
    if (a == 4 && b >= 0 && b <= 5 && b != 1 && b != 2 && b != 3 && b != 4) return true
    if (a == 5 && b >= 0 && b <= 4) return true
    if (a == 6 && b >= 0 && b <= 3) return true
    if (a == 7 && b >= 0 && b <= 2) return true
    if (a == 8 && b >= 0 && b <= 1) return true
    if (a == 9 && b >= 0 && b <= 0) return true
    return false
}

function isJuniorComradesPlus(a, b) {
    if (a == 1 && [4].includes(b)) return true
    if (a == 2 && [3, 4].includes(b)) return true
    if (a == 3 && [2, 3, 4].includes(b)) return true
    if (a == 4 && [1, 2, 3, 4].includes(b)) return true
    return false
}

function isSeniorComradesPlus(a, b) {
    if (a == 1 && b >= 9 && b <= 9) return true
    if (a == 2 && b >= 8 && b <= 9) return true
    if (a == 3 && b >= 7 && b <= 9) return true
    if (a == 4 && b >= 6 && b <= 9) return true
    if (a == 5 && b >= 5 && b <= 9 && b != 6 && b != 7 && b != 8 && b != 9) return true
    if (a == 6 && b >= 4 && b <= 9 && b != 6 && b != 7 && b != 8) return true
    if (a == 7 && b >= 3 && b <= 9 && b != 6 && b != 7) return true
    if (a == 8 && b >= 2 && b <= 9 && b != 6) return true
    if (a == 9 && b >= 1 && b <= 9) return true
    return false
}

function isCompostePlus(a, b) {
    if (a == 1 && b >= 9 && b <= 9) return false
    if (a == 2 && b >= 8 && b <= 9) return false
    if (a == 3 && b >= 7 && b <= 9) return false
    if (a == 4 && b >= 6 && b <= 9) return false
    if (a == 5 && b >= 5 && b <= 9 && b != 6 && b != 7 && b != 8 && b != 9) return false
    if (a == 6 && b >= 4 && b <= 9 && b != 6 && b != 7 && b != 8) return false
    if (a == 7 && b >= 3 && b <= 9 && b != 6 && b != 7) return false
    if (a == 8 && b >= 2 && b <= 9 && b != 6) return false
    if (a == 9 && b >= 1 && b <= 9) return false
    return true
}

//
// Minus
//
function isSimpleMinus(a, b) {
    if (a == 0 && b >= 0 && b <= 0) return true
    if (a == 1 && b >= 0 && b <= 1) return true
    if (a == 2 && b >= 0 && b <= 2) return true
    if (a == 3 && b >= 0 && b <= 3) return true
    if (a == 4 && b >= 0 && b <= 4) return true
    if (a == 5 && b >= 0 && b <= 5 && b != 1 && b != 2 && b != 3 && b != 4) return true
    if (a == 6 && b >= 0 && b <= 6 && b != 2 && b != 3 && b != 4) return true
    if (a == 7 && b >= 0 && b <= 7 && b != 3 && b != 4) return true
    if (a == 8 && b >= 0 && b <= 8 && b != 4) return true
    if (a == 9 && b >= 0 && b <= 9) return true
    return false
}

function isJuniorComradesMinus(a, b) {
    if (a == 5 && [1, 2, 3, 4].includes(b)) return true
    if (a == 6 && [2, 3, 4].includes(b)) return true
    if (a == 7 && [3, 4].includes(b)) return true
    if (a == 8 && [4].includes(b)) return true
    return false
}

function isSeniorComradesMinus(a, b) {
    if (a == 0 && b >= 1 && b <= 9) return true
    if (a == 1 && b >= 2 && b <= 9 && b != 6) return true
    if (a == 2 && b >= 3 && b <= 9 && b != 6 && b != 7) return true
    if (a == 3 && b >= 4 && b <= 9 && b != 6 && b != 7 && b != 8) return true
    if (a == 4 && b >= 5 && b <= 9 && b != 6 && b != 7 && b != 8 && b != 9) return true
    if (a == 6 && b >= 7 && b <= 9) return true
    if (a == 5 && b >= 6 && b <= 9) return true
    if (a == 7 && b >= 8 && b <= 9) return true
    if (a == 8 && b >= 9 && b <= 9) return true
    return false
}

function isComposteMinus(a, b) {
    if (a == 0 && b >= 1) return false
    if (a == 1 && b >= 2 && b != 6 && b != 7) return false
    if (a == 2 && b >= 3 && b != 6 && b != 7) return false
    if (a == 3 && b >= 4 && b != 6 && b != 7 && b != 8) return false
    if (a == 4 && b >= 5 && b != 6 && b != 7 && b != 8 && b != 9) return false
    if (a == 5 && b >= 6) return false
    if (a == 6 && b >= 7) return false
    if (a == 7 && b >= 8) return false
    if (a == 8 && b >= 9) return false
    return true
}

const isSimple = 0
const isJuniorComrades = 1
const isSeniorComrades = 2
const isComposte = 3

function checkPlus(a, b, type = isSimple) {
    if (a == 0 || b == 0) return type

    const aItem = a.toString().split("").reverse().map(item => Number(item))[0] || 0
    const bItem = b.toString().split("").reverse().map(item => Number(item))[0] || 0
    
    if (isSimplePlus(aItem, bItem)) {
        type = Math.max(type, isSimple)
    }
    else if (isJuniorComradesPlus(aItem, bItem)) {
        type = Math.max(type, isJuniorComrades)
    }
    else if (isSeniorComradesPlus(aItem, bItem)) {
        type = Math.max(type, isSeniorComrades)
    }
    else if (isCompostePlus(aItem, bItem)) {
        type = Math.max(type, isComposte)
    }
    else {
        console.log(a, b)
        throw "error"
    }
    
    return checkPlus(
        Math.floor((a + bItem) / 10),
        Math.floor(b / 10),
        type,
    )
}

function checkMinus(a, b, type = isSimple) {
    if (a == 0 || b == 0) return type

    const aItem = a.toString().split("").reverse().map(item => Number(item))[0] || 0
    const bItem = b.toString().split("").reverse().map(item => Number(item))[0] || 0

    if (isSimpleMinus(aItem, bItem)) {
        type = Math.max(type, isSimple)
    }
    else if (isJuniorComradesMinus(aItem, bItem)) {
        type = Math.max(type, isJuniorComrades)
    }
    else if (isSeniorComradesMinus(aItem, bItem)) {
        type = Math.max(type, isSeniorComrades)
    }
    else if (isComposteMinus(aItem, bItem)) {
        type = Math.max(type, isComposte)
    }
    else {
        console.log(aItem, bItem)
        throw "error"
    }
    
    return checkMinus(
        Math.floor((a - bItem) / 10),
        Math.floor(b / 10),
        type,
    )
}

function generatePlus(lenght, type) {
    const a = Math.ceil(Math.random() * 10 ** lenght)
    const b = Math.ceil(Math.random() * 10 ** lenght)
    if (checkPlus(a, b) == type) {
        return `${a} + ${b} = ${a + b}`
    } else {
        return generatePlus(lenght, type)
    }
}

function generateMinus(lenght, type) {
    const a = Math.ceil(Math.random() * 10 ** lenght)
    const b = Math.ceil(Math.random() * 10 ** lenght)
    if (a > b && checkMinus(a, b) == type) {
        return `${a} - ${b} = ${a - b}`
    } else {
        return generateMinus(lenght, type)
    }
}

function parseLevel(level) {
	if (level == "Простые формулы") return 0
	if (level == "Младшие товарищи") return 1
	if (level == "Старшие товарищи") return 2
	if (level == "Составные формулы") return 3
	throw "error"
}

function generateExercise(numberCount, operandCount, level) {
	while (true) {
		const exercise = tryGenerateExercise(numberCount, operandCount, level)
		if (exercise != null) return exercise
	}
}

function tryGenerateExercise(numberCount, operandCount, level) {
	const type = parseLevel(level)
	const operands = [...Array(operandCount).keys()].map(item => Math.ceil(Math.random() * 10 ** numberCount))

	let resultValue = operands[0]
	let resultString = `${operands[0]}`

	for (operand of operands.slice(1)) {
		if (Math.random() > 0.5 && resultValue > operand && checkMinus(resultValue, operand) == type) {
			resultValue -= operand
			resultString += ` - ${operand}`
		} else if (checkPlus(resultValue, operand) == type) {
			resultValue += operand
			resultString += ` + ${operand}`
		} else {
			return null
		}
	}
	return [resultString + ` = `, resultValue]
}

function generateExercises(count, numberCount, operandCount, level) {
	return [...Array(count).keys()].map(item => generateExercise(numberCount, operandCount, level))
}

if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
	self.addEventListener('message', function(e) {
		if (e.data.cmd === 'generate') {
            const startTime = new Date()
			const [count, numberCount, operandCount, level] = e.data.data
			const exercises = generateExercises(count, numberCount, operandCount, level)
            const endTime = new Date()
            const time = endTime - startTime
            setTimeout(() => self.postMessage(exercises), Math.min(1000, Math.max(0, 1000 - time)))
		}
	}, false)
}
