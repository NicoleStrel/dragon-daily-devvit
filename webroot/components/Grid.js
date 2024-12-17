

export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const nums = Array.from({length: 31}, (_, i) => (i + 1).toString());
export const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const gridLabels = [
    ...months.slice(0, 6),    // First 6 months
    "",                       // Empty separator
    ...months.slice(6),       // Last 6 months
    "",                       // Empty separator
    ...nums,                  // All numbers 1-31
    ...days.slice(0, 4),     // First 4 days
    "", "", "", "",          // 4 empty separators
    ...days.slice(4)         // Last 3 days
];

export function createGrid(cellSize) {
    let rows = 8;
    let cols = 7;
    const grid = document.getElementById('grid');
    if (!grid){ return null;}
    
    grid.style.width = `${cols * cellSize}px`;
    grid.style.height = `${rows * cellSize}px`;
    grid.style.position = 'relative';
    grid.style.display = 'grid';
    grid.style.gridTemplateRows = `repeat(${rows}, ${cellSize}px)`;
    grid.style.gridTemplateColumns = `repeat(${cols}, ${cellSize}px)`;
    
    let counter = 0;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const cell = document.createElement('div');
        let cellName = gridLabels[counter];
        cell.className = 'grid-cell';
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        cell.textContent = cellName;

        if (cellName == "") {
            cell.id = "empty-cell";
        }
        counter++;
        grid.appendChild(cell);
      }
    }
    return grid;
  }
  