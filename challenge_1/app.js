
var turn = "X";
var board = [[0,0,0],[0,0,0],[0,0,0]];
var moves = 0;
var winner = null;

document.getElementbyId

var addMove = function(id) {
	row = id[0];
	column = id[1];
	board[row - 1][column - 1] = turn;
	// console.log(board);
}

var renderMove = function(id) {
	id.innerHTML = turn;
	moves++;
	console.log(moves);
}

var changeTurn = function() {
	if (turn === "X") turn = "O";
	else turn = "X";
	document.getElementById("message").innerHTML = "It is " + turn + "'s turn";
}

var onClick = function(id) {
	winner = checkForWinner();
	if (winner) {
		document.getElementById("message").innerHTML = "This game is already over. Please start a new game to continue playing.";
		return;
	}
	if (board[id.id[0]-1][id.id[1]-1] !== 0) {
		document.getElementById("message").innerHTML = "Not a valid move. Please try again";
		return;
	}
	renderMove(id);
	addMove(id.id);
	changeTurn();
	winner = checkForWinner();
	if (winner === "tie") document.getElementById("message").innerHTML = "GAME OVER! It's a TIE!!";
	else if (winner) document.getElementById("message").innerHTML = winner + " wins! GAME OVER!!"; 
}

var checkForWinner = function() {
	if (board[0][0] === board[0][1] && board[0][1] === board[0][2]) return board[0][2];
	if (board[1][0] === board[1][1] && board[1][1] === board[1][2]) return board[1][2];
	if (board[2][0] === board[2][1] && board[2][1] === board[2][2]) return board[2][2];
	if (board[0][0] === board[1][0] && board[1][0] === board[2][0]) return board[2][0];
	if (board[0][1] === board[1][1] && board[1][1] === board[2][1]) return board[2][1];
	if (board[0][2] === board[1][2] && board[1][2] === board[2][2]) return board[2][2];
	if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) return board[2][2];
	if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) return board[2][0];
	if (moves === 9) return "tie";
}

var reset = function() {
	turn = "X";
	board = [[0,0,0],[0,0,0],[0,0,0]];
	winner = null;
	document.getElementById("message").innerHTML = "It is " + turn + "'s turn";
	document.getElementById("11").innerHTML = "";
	document.getElementById("12").innerHTML = "";
	document.getElementById("13").innerHTML = "";
	document.getElementById("21").innerHTML = "";
	document.getElementById("22").innerHTML = "";
	document.getElementById("23").innerHTML = "";
	document.getElementById("31").innerHTML = "";
	document.getElementById("32").innerHTML = "";
	document.getElementById("33").innerHTML = "";
}