import {createPuzzlePiece, changePuzzlePieceSize} from './components/PuzzlePiece.js';
import {createGrid} from './components/Grid.js';
import {createSolveButton, createTimer, createDate} from './components/Solver.js';

class App {
  start() {
    var initialPeiceSize = 25;
    var pieces = []
    for (let i = 1; i <= 10; i++) {
      pieces.push(createPuzzlePiece(i, initialPeiceSize));
    }
    // Initialize grid
    var gridwidth = 55;
    var grid = createGrid(gridwidth);

    // Place pieces on grid
    let draggedElementIndex = null;
    let offsetX, offsetY;

    function cleanupPiece(piece) {
      const rotateIcon = piece.querySelector('.rotate-icon');
      const flipIcon = piece.querySelector('.flip-icon');
      if (rotateIcon) piece.removeChild(rotateIcon);
      if (flipIcon) piece.removeChild(flipIcon);
      piece.setAttribute('data-has-icons', 'false');
    }

    function addIcons(piece) {
      // ignore if icons already added
      if (piece.hasAttribute('data-has-icons') && piece.getAttribute('data-has-icons') === 'true') return;
      
      var rotation = 0;
      var isFlipped = false;
      if (piece.hasAttribute('data-rotation')) {
        rotation = parseInt(piece.getAttribute('data-rotation') || '0');
        console.log("FOUND ROTATION", rotation);  
      }
      if (piece.hasAttribute('data-flipped')) {
        isFlipped = piece.getAttribute('data-flipped') === 'true';
        console.log("FOUND isFlipped", isFlipped);  
      }

      const rotateIcon = document.createElement('div');
      rotateIcon.className = 'rotate-icon';
      piece.appendChild(rotateIcon);

      const flipIcon = document.createElement('div');
      flipIcon.className = 'flip-icon';
      piece.appendChild(flipIcon);

      // Add rotation handler
      rotateIcon.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent piece drag
        rotation = (rotation + 90) % 360;
        piece.style.transform = `rotate(${rotation}deg)`;
      });
      flipIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        isFlipped = !isFlipped;
        piece.style.transform = `rotate(${rotation}deg) scaleX(${isFlipped ? -1 : 1})`;
      });
      
      piece.setAttribute('data-rotation', rotation.toString());
      piece.setAttribute('data-flipped', isFlipped.toString());
      piece.setAttribute('data-has-icons', 'true');
    }

    pieces.forEach((piece, index) => {
      piece.addEventListener('mousedown', (e) => {
        e.preventDefault();
        if (e.target === piece.querySelector('.rotate-icon') || 
            e.target === piece.querySelector('.flip-icon')) return; // Prevent drag if clicking flip/rotate
        draggedElementIndex = index;
        changePuzzlePieceSize(index+1, piece, gridwidth);
        addIcons(piece); // Add icons for rotation and flip

        const rect = piece.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        const handleMouseMove = (moveEvent) => {
          if (index === draggedElementIndex) {
              const x = moveEvent.clientX - offsetX;
              const y = moveEvent.clientY - offsetY;
              piece.style.position = 'absolute';
              piece.style.left = `${x}px`;
              piece.style.top = `${y}px`;
          }
        };

        const handleMouseUp = () => {
          draggedElementIndex = null;
          //cleanupPiece(piece);
          window.removeEventListener('mousemove', handleMouseMove);
          window.removeEventListener('mouseup', handleMouseUp);
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
      });
    });


    // Handle clicking outside (unclick)
    document.addEventListener('click', (e) => {
      // If click target is not the piece or its children

      for (const piece of pieces) {
        if (!piece.contains(e.target)) {
            cleanupPiece(piece);
        }
      }
    });
    var todaysDate = createDate();
    var timerInterval = createTimer()
    createSolveButton(grid, gridwidth, pieces, timerInterval, todaysDate);
  }
}

const app = new App();
await app.start()
