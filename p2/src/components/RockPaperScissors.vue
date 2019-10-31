<template>
	<div>
		<h1>Rock Paper Scissors</h1>
		<br>
		Choose your move:
		<br>
		<input type='radio' id='Rock' value='Rock' v-model='move'>
		<label for='easy'>Rock</label>
		<br>
		<input type='radio' id='Paper' value='Paper' v-model='move'>
		<label for='easy'>Paper</label>
		<br>
		<input type='radio' id='Scissors' value='Scissors' v-model='move'>
		<label for='easy'>Scissors</label>
		<br>
		<button v-on:click='submitMove'>Choose</button>
		<div v-show='moved'>
			Your move: {{ userMove }}
			<br>
			Computer's move: {{ computerMove }}
			<br>
			<span v-show='winner == "User"' id='win'>You won!</span>
			<span v-show='winner == "Computer"' id='lose'>You lost.</span>
			<span v-show='winner == "Tie"' id='tie'>It was a tie.</span>
		</div>
		<br>
		<span v-show='message' id='error'>{{ message }}</span>
	</div>
</template>

<script>
export default {
	name: 'RockPaperScissors',
	data: function() {
		return {
			message: '',
			move: null,
			userMove: null,
			computerMove: null,
			moved: false,
			winner: null
		};
	},
	methods: {
		submitMove: function () {
			this.computerMove = getComputerMove();
			this.message = '';
			const problemMessage = 'There was a problem, please make sure you chose a valid move.'
			if (!this.move) {
				this.message = problemMessage;
			} else if (this.move === this.computerMove) {
				this.moved = true;
				this.userMove = this.move;
				this.winner = 'Tie';
			} else {
				switch (this.move) {
					case 'Rock':
						this.moved = true;
						this.userMove = this.move;
						if (this.computerMove === 'Paper') {
							this.winner = 'Computer';
						} else if (this.computerMove === 'Scissors') {
							this.winner = 'User';
						}
						break;
					case 'Paper':
						this.moved = true;
						this.userMove = this.move;
						if (this.computerMove === 'Rock') {
							this.winner = 'User';
						} else if (this.computerMove === 'Scissors') {
							this.winner = 'Computer';
						}
						break;
					case 'Scissors':
						this.moved = true;
						this.userMove = this.move;
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
}

function getComputerMove() {
	const moves = ['Rock', 'Paper', 'Scissors'];
	return moves[Math.floor(Math.random() * 3)];
}
</script>

<style scoped>
	#win {
		color: green;
	}

	#lose {
		color: red;
	}

	#tie {
		color: blue;
	}

	#error {
		color: red;
	}
</style>
