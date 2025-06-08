//1 Deposite the amount
//2 Dertermine the number of lines to bet on
//3 Collect the bet amount 
//4 Spin the slot machine
//5 Check if the user won
//6 Give the user their winnings
//7 Play again

const prompt = require('prompt-sync')();

const ROW = 3;
const COL = 3;
const SYMBOLS_COUNT = {
    "A" : 2,
    "B" : 4,
    "C" : 6,
    "D" : 8,
}
const SYMBOLS_VALUES = {
    "A" : 5,
    "B" : 4,
    "C" : 3,
    "D" : 2,
}


const Deposite = () => {
    const DepositeAmount = parseFloat(prompt("Enter the amount to deposit: "));


    if(isNaN(DepositeAmount) || DepositeAmount <= 0) {
        console.log("Invalid deposit amount. Please enter a positive number.");
        return Deposite();
    }else{
        return DepositeAmount;
    }
}

const BetLines = () => {
    const lines = parseInt(prompt("Enter the number of lines to bet on (1-3): "));
    if(isNaN(lines) || lines <1 || lines > 3){
        console.log("Invalid number of lines Please enter a number between 1 and 3. ");
        return BetLines;
    }else{
        return lines;
    }
}

const BetAmount = (Balance) => {
    const betAmount = parseFloat(prompt(`Enter the bet amount per line (Balance: ${Balance}): `));
    
    if(isNaN(betAmount) || betAmount <= 0 || betAmount * lines > Balance) {
        console.log("Invalid bet amount. Please enter a positive number that does not exceed your balance.");
        return BetAmount(Balance);
    } else {
        return betAmount;
    }

}
const Spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    const reels = [];
    for (let i = 0; i < ROW; i++) {
        reels.push([]);
        const symbolsCopy = [...symbols];
        for (let j = 0; j < COL; j++) {
            const randomIndex = Math.floor(Math.random() * symbolsCopy.length);
            const selectedSymbol = symbolsCopy[randomIndex];
            reels[i].push(selectedSymbol);
            symbolsCopy.splice(randomIndex, 1); // Remove the selected symbol to avoid duplicates in the same row
        }
    }
    return reels;
}

const transpose = (reels) => {
    const rows = [];
    for (let i = 0; i<ROW; i++){
        rows.push([]);
        for (let j = 0; j < COL; j++){
            rows[i].push(reels[j][i]);
        }
    }
    return rows;

};

const printRows = (rows) => {
    for (const row of rows) {
        let rowString = "";
        for (const [i, symbol] of row.entries()) {
            rowString += symbol;
            if (i < row.length - 1) {
                rowString += " | ";
            }
        }
        console.log(rowString);
    }
}

const getWinnings = (rows, betAmount, lines) => {
    let winnings = 0;
    
    for(let row = 0; row < lines; row++){
        const symbols = rows[row];
        let allsame  = true;

        for(const symbol of symbols) {
            if(symbol !== symbols[0]) {
                allsame = false;
                break;
            }
            if(allsame){
                winnings += SYMBOLS_VALUES[symbols[0]] * betAmount;
            }
        }
    }
    return winnings;

}


let Balance =  Deposite();
const lines = BetLines();
const betAmount = BetAmount(Balance);

const reels = Spin();
const rows = transpose(reels);
console.log(reels)
printRows(rows);

const winnings = getWinnings(rows, betAmount, lines);
if(winnings > 0) {
    console.log(`You won ${winnings}!`);
}