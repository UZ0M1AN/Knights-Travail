console.log('uzomian...');

const log = (...a) => console.log(...a);

class Game {
    constructor () {
        this.board = this._createBoard();
    }

    _createBoard () {
        const arr = [];

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                arr.push([i, j]);
            }
        }

        return arr;
    }
}

const board = new Game();
// log(board.board);

class Knight {
    constructor () {
        // this.moves = this._knightOptions();
    }

    knightMoves (start, end) {
        const vertices = this._knightOptions(start);
    }

    _knightOptions (pos) {
        const [a, b] = pos;
        const arr = [[a - 2, b - 1], [a - 2, b + 1], [a + 2, b - 1], [a + 2, b + 1], [a - 1, b - 2], [a + 1, b - 2], [a - 1, b + 2], [a + 1, b +2]].filter(([x, y]) => x >= 0 && y >= 0);
        return arr;
    }
}

const knight = new Knight();

// log(knight._knightOptions([0, 0]))
log(knight.knightMoves([0, 0], [1, 2]));