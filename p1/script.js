var app = new Vue({
	el: '#app',
	data: {
		message: '',
		move: null,
		computerMove: null,
		moved: false,
		winner: null
	},
	methods: {
		submitMove: function (event) {
			this.computerMove = getComputerMove();
			this.message = '';
			const problemMessage = 'There was a problem, please make sure you chose a valid move.'
			if (!this.move) {
				this.message = problemMessage;
			} else if (this.move === this.computerMove) {
				this.winner = 'Tie';
			} else {
				switch (this.move) {
					case 'Rock':
						this.moved = true;
						if (this.computerMove === 'Paper') {
							this.winner = 'Computer';
						} else if (this.computerMove === 'Scissors') {
							this.winner = 'User';
						}
						break;
					case 'Paper':
						this.moved = true;
						if (this.computerMove === 'Rock') {
							this.winner = 'User';
						} else if (this.computerMove === 'Scissors') {
							this.winner = 'Computer';
						}
						break;
					case 'Scissors':
						this.moved = true;
						if (this.computerMove === 'Rock') {
							this.winner = 'Computer';
						} else if (this.computerMove === 'Paper') {
							this.winner = 'User';
						}
						break;
					default:
						this.moved = false;
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
