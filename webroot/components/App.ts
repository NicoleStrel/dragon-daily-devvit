import { createPuzzlePiece } from './PuzzlePiece.js';
import { createGrid } from './Grid.js';
import { createSolveButton, createTimer, createDate } from './Solver.js';
import { addPuzzleListeners } from './PuzzleListeners.js';

class App {
  async start(): Promise<void> {
    const initialPeiceSize: number = 25;
    const gridwidth: number = 55;
    const pieces: HTMLElement[] = [];

    // initialize pieces
    for (let i: number = 1; i <= 10; i++) {
      pieces.push(createPuzzlePiece(i, initialPeiceSize));
    }
    addPuzzleListeners(pieces, gridwidth);

    // Initialize grid
    const grid: HTMLElement | null = createGrid(gridwidth);

    if (grid !== null) {
      // Initialize timer, date, and solve button
      const todaysDate: string[] = createDate();
      const timerInterval: number | null = createTimer();
      if (timerInterval) {
        createSolveButton(grid, gridwidth, pieces, timerInterval, todaysDate);
      }
    }
  }
}

const app: App = new App();
await app.start();