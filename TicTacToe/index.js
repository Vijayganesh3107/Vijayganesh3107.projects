var message = document.getElementById("message");
var mainboard = document.getElementById("mainboard");
var alert1 = document.getElementById("alert");
alert1.classList.add("displaynone");
var TicTacToe = /** @class */ (function () {
    function TicTacToe(cells) {
        this.player = 1; //User    -1:Computer
        this.cells = cells;
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        // this.currentplayer = this.player;
    }
    TicTacToe.prototype.IsGameFinished = function (board) {
        if (this.win(board))
            return true;
        //When someone wins
        else {
            if (this.Full(board))
                return true; //when draw
        }
        return false;
    };
    TicTacToe.prototype.Full = function (board) {
        for (var i = 0; i < board.length; i++) {
            if (board[i] == 0)
                return false;
        }
        return true;
    };
    TicTacToe.prototype.CheckPossiblities = function (possiblities, id) {
        for (var i = 0; i < possiblities.length; i++) {
            if (possiblities[i] == id)
                return true;
        }
        return false;
    };
    TicTacToe.prototype.CreateCompPos = function () {
        var x = Math.floor(Math.random() * 9);
        return x;
    };
    /*[0,1,2]
      [1,4,7]
      [2,5,8]
      [0,3,6]
      [0,4,8]
      [2,4,6]
      [3,4,5]
      [6,7,8]*/
    TicTacToe.prototype.win = function (board) {
        var b = board[1];
        if (b == board[4] && b == board[7] && b != 0)
            return b; //if retruns 1 user wins if returns -1 computer wins
        b = board[0];
        if (b == board[1] && b == board[2] && b != 0)
            return b;
        b = board[2];
        if (b == board[5] && b == board[8] && b != 0)
            return b;
        b = board[0];
        if (b == board[3] && b == board[6] && b != 0)
            return b;
        b = board[0];
        if (b == board[4] && b == board[8] && b != 0)
            return b;
        b = board[2];
        if (b == board[4] && b == board[6] && b != 0)
            return b;
        b = board[3];
        if (b == board[4] && b == board[5] && b != 0)
            return b;
        b = board[6];
        if (b == board[7] && b == board[8] && b != 0)
            return b;
        return 0;
    };
    TicTacToe.prototype.Gameplay = function (cellno) {
        if (this.IsGameFinished(this.board)) {
            message.innerHTML = "Game Over";
            message.classList.remove("displaynone");
            return;
        }
        else {
            if (this.board[cellno] == -1) {
                alert1.innerHTML = "Computer has used this spot already";
                alert1.classList.remove("displaynone");
            }
            else {
                alert1.classList.add("displaynone");
                if (this.board[cellno] == 1) {
                    alert1.innerHTML =
                        "You have used this cell already please select another cell";
                    alert1.classList.remove("displaynone");
                }
                else {
                    this.board[cellno] = 1;
                    this.cells[cellno].innerHTML = "X";
                    this.cells[cellno].style.fontSize = "200%";
                    this.cells[cellno].style.color = "Red";
                    if (this.win(this.board)) {
                        message.innerHTML = "User Won the Game";
                        message.classList.remove("displaynone");
                    }
                    else {
                        if (this.Full(this.board)) {
                            message.innerHTML = "Match Drawn !!!";
                            message.classList.remove("displaynone");
                        }
                        else {
                            var comp = this.CompPlay(); //Computer's Positon
                            this.board[comp] = -1;
                            this.cells[comp].innerHTML = "O";
                            this.cells[comp].style.color = "Cyan";
                            this.cells[comp].style.fontSize = "200%";
                            if (this.win(this.board)) {
                                message.innerHTML = "Computer Won the Game";
                                message.classList.remove("displaynone");
                            }
                            else {
                                if (this.Full(this.board)) {
                                    message.innerHTML = "Match Drawn !!!";
                                    message.classList.remove("displaynone");
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    TicTacToe.prototype.CompPlay = function () {
        var possibilities = [];
        for (var i = 0; i < 9; i++) {
            if (this.board[i] == 0)
                possibilities.push(i);
        }
        while (true) {
            var comppos = this.CreateCompPos();
            if (this.CheckPossiblities(possibilities, comppos))
                return comppos;
        }
    };
    return TicTacToe;
}());
var cell1 = document.getElementById("cell1");
var cell2 = document.getElementById("cell2");
var cell3 = document.getElementById("cell3");
var cell4 = document.getElementById("cell4");
var cell5 = document.getElementById("cell5");
var cell6 = document.getElementById("cell6");
var cell7 = document.getElementById("cell7");
var cell8 = document.getElementById("cell8");
var cell9 = document.getElementById("cell9");
var cellarr = [];
cellarr.push(cell1);
cellarr.push(cell2);
cellarr.push(cell3);
cellarr.push(cell4);
cellarr.push(cell5);
cellarr.push(cell6);
cellarr.push(cell7);
cellarr.push(cell8);
cellarr.push(cell9);
var tictactoe = new TicTacToe(cellarr);
cell1.addEventListener("click", function () {
    tictactoe.Gameplay(0);
});
cell2.addEventListener("click", function () {
    tictactoe.Gameplay(1);
});
cell3.addEventListener("click", function () {
    tictactoe.Gameplay(2);
});
cell4.addEventListener("click", function () {
    tictactoe.Gameplay(3);
});
cell5.addEventListener("click", function () {
    tictactoe.Gameplay(4);
});
cell6.addEventListener("click", function () {
    tictactoe.Gameplay(5);
});
cell7.addEventListener("click", function () {
    tictactoe.Gameplay(6);
});
cell8.addEventListener("click", function () {
    tictactoe.Gameplay(7);
});
cell9.addEventListener("click", function () {
    tictactoe.Gameplay(8);
});
