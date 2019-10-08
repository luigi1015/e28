var app = new Vue({
	el: '#app',
	data: {
		message: '',
		move: null
	},
	methods: {
		submitMove: function (event) {
			const computerMove = getComputerMove();
			const problemMessage = 'There was a problem, please make sure you chose a valid move.'
			if (!this.move) {
				this.message = problemMessage;
			} else if (this.move === computerMove) {
				this.message = 'Tie';
			} else {
				switch (this.move) {
					case 'Rock':
						if (computerMove === 'Paper') {
							this.message = 'Computer Won';
						} else if (computerMove === 'Scissors') {
							this.message = 'You Won';
						}
						break;
					case 'Paper':
						if (computerMove === 'Rock') {
							this.message = 'You Won';
						} else if (computerMove === 'Scissors') {
							this.message = 'Computer Won';
						}
						break;
					case 'Scissors':
						if (computerMove === 'Rock') {
							this.message = 'Computer Won';
						} else if (computerMove === 'Paper') {
							this.message = 'You Won';
						}
						break;
					default:
						this.message = problemMessage;
						break;
				}
			}
		}
	}
});

function getComputerMove() {
	const moves = ['Rock', 'Paper', 'Scissors'];
	return moves[Math.floor(Math.random() * 3)];
}
