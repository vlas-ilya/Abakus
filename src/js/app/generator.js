function generate(count, numberCount, operandCount, level, setState) {
	let worker = new Worker('./js/app/webworker-generator.js')
	worker.addEventListener('message', function (e) {
		setState({
			exercises: e.data
		})
	}, false);
	worker.postMessage({ 'cmd': 'generate', 'data': [count, numberCount, operandCount, level] });
}

function stopWebWorker() {
	let worker = new Worker('./js/app/webworker-generator.js')
	worker.terminate()
}
