const textInput = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

textInput.addEventListener('input', submit => {
	output.textContent = submit.target.value

	if (submit.target.value === '') {
		output.textContent = 'Anonymous'
	}
})