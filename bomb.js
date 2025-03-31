import readline from "readline";

export default class Game{
    size;
    board;
    readline;
    speed = 300;
    bombX; bombY;
    constructor(){
        console.log("Game started");
        this.initReadline();
        this.askForSize();
    }

    initReadline(){
        this.readline = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    askForSize(){
        this.readline.question("Enter the size of the board: ", size => {
            this.size = parseInt(size);
            this.createBoard();
            this.readline.close();
        });
    }

    createBoard() {
        this.board = Array.from({ length: this.size }, () => new Array(this.size).fill(0));
        this.placeBomb();
    }

    placeBomb() {
        let x = Math.floor(Math.random() * this.size);
        let y = Math.floor(Math.random() * this.size);
        this.board[y][x] = "B";
        this.printBoard();
        this.searchForBomb();
    }

    printBoard() {
        this.board.forEach(row => console.log(row.join(" ")));
    }

    clearBoard() {
        console.clear();
    }

    explosion(x,y){
        // in first step, the whole area around bmb will explode, which means that all the cells around the bomb will be marked as "*". then it will be 

        const bombPositionX = x;
        const bombPositionY = y;

        let step = 1;

        // loop around the bomb in steps
        if (step < 2) {
            const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

            (async () => {
                for (let y = bombPositionY - step; y <= bombPositionY + step; y++) {
                    for (let x = bombPositionX - step; x <= bombPositionX + step; x++) {
                        if (y >= 0 && y < this.size && x >= 0 && x < this.size && this.board[y][x] !== "B") {
                            this.board[y][x] = "*";
                            this.clearBoard();
                            this.printBoard();
                            await delay(this.speed);
                        }
                    }
                }
            })();
        }
        else {
            
        }
    }

    searchForBomb() {
        // loop throught array and check if there is a bomb. as a cursor use character 'X'
        // if there is a bomb, print "You found a bomb!" and return
        
        const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

        (async () => {
            for (let y = 0; y < this.size; y++) {
            for (let x = 0; x < this.size; x++) {
                this.clearBoard();
                let originalValue = this.board[y][x];
                this.board[y][x] = "X";
                this.printBoard();
                await delay(this.speed); // 500ms delay

                if (originalValue === "B") {
                this.explosion(x,y);
                return;
                }
                this.board[y][x] = 0; // Reset the cursor
            }
            }
        })();
    }

}

let game = new Game();


