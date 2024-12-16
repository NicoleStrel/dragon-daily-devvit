import { days, months } from "./Grid.js";

function findUncoveredCells(grid, cellSize, pieces) {
    const uncoveredCells = [];

    const gridRect = grid.getBoundingClientRect();
    const cells = grid.querySelectorAll('div');

    cells.forEach((cell) => {
        const cellRect = cell.getBoundingClientRect();
        const cellCenterX = cellRect.left + cellRect.width / 2;
        const cellCenterY = cellRect.top + cellRect.height / 2;
        let isCovered = false;

        pieces.forEach((piece) => {
            const rects = piece.querySelectorAll('rect');
            rects.forEach((rect) => {
                const rectBBox = rect.getBoundingClientRect();

                const overlapX = Math.max(0, Math.min(cellRect.right, rectBBox.right) - Math.max(cellRect.left, rectBBox.left));
                const overlapY = Math.max(0, Math.min(cellRect.bottom, rectBBox.bottom) - Math.max(cellRect.top, rectBBox.top));
                const overlapArea = overlapX * overlapY;
                const cellArea = cellSize * cellSize;

                if (overlapArea / cellArea >= 0.80) {
                    isCovered = true;
                }
            });
        });

        if (!isCovered && cell.textContent != '') {
            uncoveredCells.push(cell.textContent);
        }
    });

    console.log('Uncovered cells:', uncoveredCells);
    return uncoveredCells;
}

function findDateMatch(uncoveredCells, todaysDate) {
    console.log("Today's Date: ", todaysDate)
    if (!uncoveredCells || !todaysDate || uncoveredCells.length !== todaysDate.length) {
        return false;
    }
    const sorteduncoveredCells = [...uncoveredCells].sort().toString();
    const sortedtodaysDate = [...todaysDate].sort().toString();
    return sorteduncoveredCells === sortedtodaysDate;
}

function createPopup() {
    var time =  document.getElementById('timer').textContent
    const popup = document.getElementById('solvePopup');
    const timeDisplay = document.getElementById('solveTime');
    timeDisplay.textContent = `Time: ${time}`;
    popup.style.display = 'flex';

    const closeButton = popup.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
        console.log("closed!")
    });
}

function createErrorMessage() {
    const solveButton = document.querySelector('.solve-button');
    const buttonRect = solveButton.getBoundingClientRect();
    
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.textContent = "Invalid solution - not today's date!";
    errorMessage.style.top = `${buttonRect.top - 30}px`;
    
    var container = document.querySelector('.container');
    container.appendChild(errorMessage);
    
    requestAnimationFrame(() => errorMessage.classList.add('show'));
    
    setTimeout(() => {
        errorMessage.classList.remove('show');
        setTimeout(() => errorMessage.remove(), 300);
    }, 3000);
}

export function createTimer() {
    let startTime = Date.now();
    const timer = document.createElement('div');
    timer.id = 'timer';
    timer.textContent = 'Time: 0s';
    var container = document.querySelector('.container');
    container.appendChild(timer);
    const updateTimer = () => {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        const minutes = String(Math.floor(elapsedTime / 60)).padStart(2, '0');
        const seconds = String(elapsedTime % 60).padStart(2, '0');
        timer.textContent = `${minutes}:${seconds}`;
    };
    
    const timerInterval = setInterval(updateTimer, 1000);
    return timerInterval;
}

export function createDate(){
    const today = new Date();
    const dayName = today.toLocaleString('default', { weekday: 'long' });
    const monthName = today.toLocaleString('default', { month: 'long' });
    const dayNum = today.getDate();
    const ordinalSuffix = (n) => ['th', 'st', 'nd', 'rd'][(n % 100 > 10 && n % 100 < 20) || n % 10 > 3 ? 0 : n % 10];
    const formattedDate = `${dayName}, ${monthName} ${dayNum}${ordinalSuffix(dayNum)}`;

    const dateDisplay = document.createElement('div');
    dateDisplay.id = 'date';
    dateDisplay.textContent = `Solve for today's date: ${formattedDate}`;
    var container = document.querySelector('.container');
    container.appendChild(dateDisplay);
    
    const todaysDate = [months[today.getMonth()], dayNum.toString(), days[today.getDay()]]
    return todaysDate;
}

export function createSolveButton(grid, cellSize, pieces, timerInterval, todaysDate){
    const solveButton = document.createElement('button');
    solveButton.textContent = 'Submit';
    solveButton.className = 'solve-button';

    solveButton.addEventListener('click', () => {
        clearInterval(timerInterval);
        var uncoveredCells = findUncoveredCells(grid, cellSize, pieces);
        createPopup();
        // if (findDateMatch(uncoveredCells, todaysDate)){
        //     createPopup();
        // } else {
        //     createErrorMessage();
        // };
    });

    var container = document.querySelector('.container');
    container.appendChild(solveButton);
}