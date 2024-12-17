import { days, months } from "./Grid.js";

function findUncoveredCells(grid, cellSize, pieces) {
    const uncoveredCells = [];
    const cells = grid.querySelectorAll('div');

    cells.forEach((cell) => {
        const cellRect = cell.getBoundingClientRect();
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

        if (!isCovered && cell.textContent && cell.textContent != '') {
            uncoveredCells.push(cell.textContent);
        }
    });
    return uncoveredCells;
}

function findDateMatch(uncoveredCells, todaysDate) {
    if (!uncoveredCells || !todaysDate || uncoveredCells.length !== todaysDate.length) {
        return false;
    }
    const sorteduncoveredCells = [...uncoveredCells].sort().toString();
    const sortedtodaysDate = [...todaysDate].sort().toString();
    return sorteduncoveredCells === sortedtodaysDate;
}

function createPopup() {
    const timer = document.getElementById('timer');
    const popup = document.getElementById('solvePopup');
    const timeDisplay = document.getElementById('solveTime');
    if (!timer || !popup || !timeDisplay) { return; }
    var time =  timer.textContent
    timeDisplay.textContent = `Time: ${time}`;
    popup.style.display = 'flex';

    const closeButton = popup.querySelector('.close-button');
    if (closeButton){
        closeButton.addEventListener('click', () => {
            window.parent?.postMessage(
                { type: 'result', data: { timeStr: time } },
                '*'
            );
        });
    }
}

function createErrorMessage() {
    const solveButton = document.querySelector('.solve-button');
    if (!solveButton) { return; }
    const buttonRect = solveButton.getBoundingClientRect();
    
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.textContent = "Invalid solution - not today's date!";
    errorMessage.style.top = `${buttonRect.top - 30}px`;
    
    var container = document.querySelector('.container');
    if (!container) { return; }
    container.appendChild(errorMessage);
    
    requestAnimationFrame(() => errorMessage.classList.add('show'));
    
    setTimeout(() => {
        errorMessage.classList.remove('show');
        setTimeout(() => errorMessage.remove(), 300);
    }, 3000);
}

export function createTimer() {
    let startTime = Date.now();
    const timer = document.getElementById('timer');
    if (!timer) { return null; }
    const svgTime = timer.querySelector('svg');
    if (!svgTime) { return null; }

    const timerText = document.createElement('p');
    timerText.textContent = '00:00';
    timer.appendChild(timerText);
    
    svgTime.style.display = 'block';
    const updateTimer = () => {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        const minutes = String(Math.floor(elapsedTime / 60)).padStart(2, '0');
        const seconds = String(elapsedTime % 60).padStart(2, '0');
        timerText.textContent = `${minutes}:${seconds}`;
    };
    
    const timerInterval = setInterval(updateTimer, 1000);
    return timerInterval;
}

export function createDate(){
    const today = new Date();
    const dayName = today.toLocaleString('default', { weekday: 'long', timeZone: 'UTC' });
    const monthName = today.toLocaleString('default', { month: 'long', timeZone: 'UTC' });
    const dayNum = today.getUTCDate();
    const ordinalSuffix = (n) => ['th', 'st', 'nd', 'rd'][(n % 100 > 10 && n % 100 < 20) || n % 10 > 3 ? 0 : n % 10];
    const formattedDate = `${dayName}, ${monthName} ${dayNum}${ordinalSuffix(dayNum)} (UTC)`;

    const dateDisplay = document.createElement('div');
    dateDisplay.id = 'date';
    const date1 = document.createElement('p');
    date1.textContent = "Isolate the today's date with the tiles:"; 
    const date2 = document.createElement('p');
    date2.textContent = `${formattedDate}`;
    dateDisplay.appendChild(date1);
    dateDisplay.appendChild(date2);
    var container = document.querySelector('.container');
    if (container){
        container.appendChild(dateDisplay);
    }
    
    const todaysDate = [months[today.getUTCMonth()], dayNum.toString(), days[today.getUTCDay()]]
    return todaysDate;
}

export function createSolveButton(grid, cellSize, pieces, timerInterval, todaysDate) {
    const solveButton = document.createElement('button');
    solveButton.textContent = 'Submit';
    solveButton.className = 'solve-button';

    solveButton.addEventListener('click', () => {
        var uncoveredCells = findUncoveredCells(grid, cellSize, pieces);
        if (findDateMatch(uncoveredCells, todaysDate)){
            clearInterval(timerInterval);
            createPopup();
        } else {
            createErrorMessage();
        };
    });

    var container = document.querySelector('.container');
    if (container){
        container.appendChild(solveButton);
    }
}