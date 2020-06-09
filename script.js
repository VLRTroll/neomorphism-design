document.querySelectorAll('input[type=color]').forEach((inputEl) => {
	inputEl.addEventListener('change', ({ target: input }) => {
		const newColor = input.value;
		const sibling = input.previousElementSibling;

		const colorText = sibling.firstElementChild;
		colorText.textContent = colorText.textContent.replace(/#\w{6}/, newColor);
	});
});

document.querySelector('body button').addEventListener('click', () => {
	const [currentInput, targetInput] = document.querySelectorAll(
		'input[type=color]'
	);

	const newResultText = `<b>background:</b> linear-gradient(to right, ${currentInput.value}, ${targetInput.value});`;

	const resultText = document.querySelector('.result-container p');
	resultText.innerHTML = newResultText;
});

document
	.querySelector('.result-container button')
	.addEventListener('click', () => {
		const resultText = document.querySelector('.result-container p');
		const tooltip = document.querySelector('.tooltiptext');

		moveToClipboard(resultText.innerText);
		tooltip.style.setProperty('opacity', '1');
		tooltip.style.setProperty('visibility', 'visible');
	});

document.querySelector('.tooltip').addEventListener('mouseleave', () => {
	const tooltip = document.querySelector('.tooltiptext');
	tooltip.style.setProperty('opacity', '0');
	tooltip.style.setProperty('visibility', 'hidden');
});
