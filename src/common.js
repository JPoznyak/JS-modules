const message = document.querySelector('.message');

export default function renderMessage(text) {
	message.textContent = text;
	
};

export function renderDates(result) {
	message.innerHTML = `
		<p>Years: ${result.years}</p>
		<p>Months: ${result.months}</p>
		<p>Days: ${result.days}</p>
		`
};

const dateBtn = document.querySelector('.dateBtn');
const dateBlock = document.querySelector('.date-container');
const timerBtn =  document.querySelector('.timerBtn');
const timerBlock = document.querySelector('.timer-container');

dateBtn.addEventListener('click', () => {
	dateBtn.classList.add('invisible');
	dateBlock.classList.remove('invisible');
	timerBlock.classList.add('invisible');
	timerBtn.classList.remove('invisible');
});


timerBtn.addEventListener('click', () => {
	timerBtn.classList.add('invisible');
	dateBlock.classList.add('invisible');
	timerBlock.classList.remove('invisible');
	dateBtn.classList.remove('invisible');
});