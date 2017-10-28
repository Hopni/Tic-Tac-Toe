class TicTacToe {
    constructor() {
        this.playerSymbol = 'x';
        this.counter = 0;
        this. field = [3];
        for(var i = 0; i < 3; i++)
        {
            this.field[i] = [];
        }
        for(var i = 0; i < 3; i++)
        {
            for(var j = 0; j < 3; j++)
            {
                this.field[i][j] = null;
            }
        }
    }

    getCurrentPlayerSymbol() {
        return this.playerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        this.counter++;
        this.field[rowIndex][columnIndex] = this.playerSymbol;
        if(this.playerSymbol === "x")
        {
            this.playerSymbol = "o";
        }
        else
        {
            this.playerSymbol = "x";
        }
    }

    isFinished() {
        if(this.noMoreTurns() || (this.getWinner() !== null))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    getWinner() {
        for(var i = 0; i < 3; i++)
        {
            if(this.field[i][0] === this.field[i][1] === this.field[i][2] !== null)
            {
                return this.field[i][0];
            }
            if(this.field[0][i] === this.field[1][i] === this.field[2][i] !== null)
            {
                return this.field[0][i];
            }
            
        }
        if(this.field[0][0] === this.field[1][1] === this.field[2][2] !== null)
        {
            return this.field[0][0];
        }
        if(this.field[0][2] === this.field[1][1] === this.field[2][0] !== null)
        {
            return true;
        }
        return null;
    }

    noMoreTurns() {
        if(this.counter >= 9)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    isDraw() {
        if(this.noMoreTurns() && (this.getWinner() === null))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
