function TicTacToeGame() {
    let grid = Array(9).fill('');  // Initialize an empty 3x3 grid
    let currentPlayer = 'X';       // 'X' goes first

    return {
        takeTurn: function(index) {
            if (grid[index] === '') {  // If the selected cell is empty, fill it
                grid[index] = currentPlayer;
                currentPlayer = currentPlayer === 'X' ? 'Y' : 'X';  // Switch players
                return true;
            }
            return false;  // If the cell is already occupied, do nothing
        },
        getGrid: function() {
            return grid;
        },
        checkWinner: function() {
            const winningCombinations = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
                [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
                [0, 4, 8], [2, 4, 6]              // Diagonals
            ];

            for (let combo of winningCombinations) {
                const [a, b, c] = combo;
                if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
                    return `${grid[a]} wins!`;
                }
            }
            return grid.includes('') ? "Game in progress" : "It's a draw!";
        }
    };
}
