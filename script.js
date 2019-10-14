let btns = document.querySelectorAll('button');
let checks = null;
let bool = true;
let x = 0;
let o = 0;

let i = localStorage.getItem('xPoints') || 0;

document.querySelector('.xx').textContent = localStorage.getItem('xPoints') || 0
document.querySelector('.oo').textContent = localStorage.getItem('oPoints') || 0

let arr = [

	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]

];


btns.forEach(item => {
	item.addEventListener('click', triggered);
})


function triggered(event) {

	if (event.target.tagName.toLowerCase() === 'button') {

		if (!(checks % 2)) {
			event.target.innerHTML = 'X'
			document.querySelector('p span').innerHTML = 'нолик'
		} else {
			event.target.innerHTML = '0'
			document.querySelector('p span').innerHTML = 'иксик'
		}

		event.target.setAttribute('disabled', 'disabled')

		checks++;

	}

	if (bool) selectWinner();

}

function selectWinner() {

	let localeChecker = false;

	let checkBtns = [...btns].every(item => {
		return item.textContent
	})

	for (let i = 0; i < arr.length; i++) {
		if (btns[arr[i][0]].textContent === 'X' && btns[arr[i][1]].textContent === 'X' && btns[arr[i][2]].textContent === 'X') {

			x++;

			if (localStorage.getItem('xPoints')) {
				x = x + +localStorage.getItem('xPoints');
			}

			localStorage.setItem('xPoints', x)


			localeChecker = true;
			bool = false;


			setTimeout(() => {

				alert('Победили крестики')
				location.reload();

			}, 50)

		} else if (btns[arr[i][0]].textContent === '0' && btns[arr[i][1]].textContent === '0' && btns[arr[i][2]].textContent === '0') {
			

			x++;

			if (localStorage.getItem('oPoints')) {
				x = x + +localStorage.getItem('oPoints');
			}

			localStorage.setItem('oPoints', x)


			localeChecker = true;
			bool = false;


			setTimeout(() => {

				alert('Победили нолики')
				location.reload();

			}, 50)

		}
	}

	if (checkBtns && !localeChecker) {
		alert('Ничья!')
		location.reload();
	}


}