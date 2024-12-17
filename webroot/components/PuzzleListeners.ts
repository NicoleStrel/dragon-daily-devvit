
import { changePuzzlePieceSize } from './PuzzlePiece.js';

function cleanupPiece(piece: HTMLElement) {
    const rotateIcon = piece.querySelector('.rotate-icon');
    const flipIcon = piece.querySelector('.flip-icon');
    if (rotateIcon) piece.removeChild(rotateIcon);
    if (flipIcon) piece.removeChild(flipIcon);
    piece.setAttribute('data-has-icons', 'false');
  }

function addIcons(piece: HTMLElement) {
    // ignore if icons already added
    if (piece.hasAttribute('data-has-icons') && piece.getAttribute('data-has-icons') === 'true') return;
    
    var rotation = 0;
    var isFlipped = false;
    if (piece.hasAttribute('data-rotation')) {
      rotation = parseInt(piece.getAttribute('data-rotation') || '0');
    }
    if (piece.hasAttribute('data-flipped')) {
      isFlipped = piece.getAttribute('data-flipped') === 'true';
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
      piece.style.transform = `rotate(${rotation}deg) scaleX(${isFlipped ? -1 : 1})`;
      piece.setAttribute('data-rotation', rotation.toString());
    });
    flipIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      isFlipped = !isFlipped;
      piece.style.transform = `rotate(${rotation}deg) scaleX(${isFlipped ? -1 : 1})`;
      piece.setAttribute('data-flipped', isFlipped.toString());
    });
    
    piece.setAttribute('data-has-icons', 'true');
  }


export function addPuzzleListeners(pieces: HTMLElement[], gridwidth: number){
    let draggedElementIndex: number | null = null;
    let offsetX: number, offsetY: number;

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
  
          const handleMouseMove = (moveEvent: MouseEvent) => {
            if (index === draggedElementIndex) {
                const rotation = parseInt(piece.getAttribute('data-rotation') || '0');
                let x, y;
                if (rotation === 90 || rotation === 270) {
                    const rotatedOffsetX = rect.height - offsetY;
                    const rotatedOffsetY = offsetX; 
                    x = moveEvent.clientX - rotatedOffsetX;
                    y = moveEvent.clientY - rotatedOffsetY;
                } else {
                    x = moveEvent.clientX - offsetX;
                    y = moveEvent.clientY - offsetY;
                }
                piece.style.position = 'absolute';
                piece.style.left = `${x}px`;
                piece.style.top = `${y}px`;
            }
          };
  
          const handleMouseUp = () => {
            draggedElementIndex = null;
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
          };
          
          window.addEventListener('mousemove', handleMouseMove);
          window.addEventListener('mouseup', handleMouseUp);
        });
      });
  
  
      // Handle clicking outside (unclick)
      document.addEventListener('click', (e: MouseEvent) => {
        const targetNode = e.target;
        if (!(targetNode instanceof Node)) return;

        for (const piece of pieces) {
          if (!piece.contains(targetNode)) {
              cleanupPiece(piece);
          }
        }
      });
}