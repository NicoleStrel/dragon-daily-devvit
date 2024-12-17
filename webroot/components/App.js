import { createPuzzlePiece } from './PuzzlePiece.js';
import { createGrid } from './Grid.js';
import { createSolveButton, createTimer, createDate } from './Solver.js';
import { addPuzzleListeners } from './PuzzleListeners.js';

class App {
  async start() {
    const initialPeiceSize = 25;
    const gridwidth = 55;
    const pieces = [];

    // initialize pieces
    for (let i = 1; i <= 10; i++) {
      pieces.push(createPuzzlePiece(i, initialPeiceSize));
    }
    addPuzzleListeners(pieces, gridwidth);

    // Initialize grid
    const grid = createGrid(gridwidth);

    if (grid !== null) {
      // Initialize timer, date, and solve button
      const todaysDate = createDate();
      const timerInterval = createTimer();
      if (timerInterval) {
        createSolveButton(grid, gridwidth, pieces, timerInterval, todaysDate);
      }
    }
  }
}

const app = new App();
await app.start();