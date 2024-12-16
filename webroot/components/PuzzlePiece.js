const puzzlePiecesPaths = {
    1: { // z shape
        width: `{blocksize*3}`,
        height: `{blocksize*2}`,
        svg: `<rect y="{blocksize}" width="{blocksize}" height="{blocksize}" fill="#F2196C" fill-opacity="0.26"/><rect x="{blocksize*2}" width="{blocksize}" height="{blocksize}" fill="#F2196C" fill-opacity="0.26"/><rect x="{blocksize}" width="{blocksize}" height="{blocksize}" fill="#F2196C" fill-opacity="0.26"/><rect x="{blocksize}" y="{blocksize}" width="{blocksize}" height="{blocksize}" fill="#F2196C" fill-opacity="0.26"/>`
    },
    2: { // long z shape
        width: `{blocksize*4}`,
        height: `{blocksize*2}`,
        svg: `<rect x="{blocksize*3}" width="{blocksize}" height="{blocksize}" fill="#C4C4C4" fill-opacity="0.26"/><rect y="{blocksize}" width="{blocksize}" height="{blocksize}" fill="#C4C4C4" fill-opacity="0.26"/><rect x="{blocksize*2}" width="{blocksize}" height="{blocksize}" fill="#C4C4C4" fill-opacity="0.26"/><rect x="{blocksize}" width="{blocksize}" height="{blocksize}" fill="#C4C4C4" fill-opacity="0.26"/><rect x="{blocksize}" y="{blocksize}" width="{blocksize}" height="{blocksize}" fill="#C4C4C4" fill-opacity="0.26"/>`
    },
    3 : { // t shape
        width: `{blocksize*3}`,
        height: `{blocksize*3}`,
        svg: `<rect x="{blocksize}" width="{blocksize}" height="{blocksize}" fill="#94CF7B" fill-opacity="0.26"/>
<rect x="{blocksize}" y="{blocksize}" width="{blocksize}" height="{blocksize}" fill="#94CF7B" fill-opacity="0.26"/>
<rect x="{blocksize*2}" y="{blocksize*2}" width="{blocksize}" height="{blocksize}" fill="#94CF7B" fill-opacity="0.26"/>
<rect y="{blocksize*2}" width="{blocksize}" height="{blocksize}" fill="#94CF7B" fill-opacity="0.26"/>
<rect x="{blocksize}" y="{blocksize*2}" width="{blocksize}" height="{blocksize}" fill="#94CF7B" fill-opacity="0.26"/>`
    },
    4 : {
        width: `{blocksize*4}`,
        height: `{blocksize*2}`,
        svg: `<rect x="{blocksize}" width="{blocksize}" height="{blocksize}" fill="#F2196C" fill-opacity="0.26"/>
<rect width="{blocksize}" height="{blocksize}" fill="#F2196C" fill-opacity="0.26"/>
<rect x="{blocksize*2}" width="{blocksize}" height="{blocksize}" fill="#F2196C" fill-opacity="0.26"/>
<rect x="{blocksize*3}" width="{blocksize}" height="{blocksize}" fill="#F2196C" fill-opacity="0.26"/>
<rect x="{blocksize*3}" y="{blocksize}" width="{blocksize}" height="{blocksize}" fill="#F2196C" fill-opacity="0.26"/>`
    },
    5 : {
        width: `{blocksize}`,
        height: `{blocksize*4}`,
        svg: `<rect y="{blocksize*3}" width="{blocksize}" height="{blocksize}" fill="#94CF7B" fill-opacity="0.26"/>
<rect y="{blocksize*2}" width="{blocksize}" height="{blocksize}" fill="#94CF7B" fill-opacity="0.26"/>
<rect y="{blocksize}" width="{blocksize}" height="{blocksize}" fill="#94CF7B" fill-opacity="0.26"/>
<rect width="{blocksize}" height="{blocksize}" fill="#94CF7B" fill-opacity="0.26"/>`
    },
    6 : {
        width: `{blocksize*3}`,
        height: `{blocksize*3}`,
        svg: `<rect x="{blocksize*2}" width="{blocksize}" height="{blocksize}" fill="#C4C4C4" fill-opacity="0.26"/>
<rect x="{blocksize*2}" y="{blocksize}" width="{blocksize}" height="{blocksize}" fill="#C4C4C4" fill-opacity="0.26"/>
<rect x="{blocksize}" y="{blocksize}" width="{blocksize}" height="{blocksize}" fill="#C4C4C4" fill-opacity="0.26"/>
<rect y="{blocksize}" width="{blocksize}" height="{blocksize}" fill="#C4C4C4" fill-opacity="0.26"/>
<rect y="{blocksize*2}" width="{blocksize}" height="{blocksize}" fill="#C4C4C4" fill-opacity="0.26"/>`
    },
    7 : {
        width: `{blocksize*3}`,
        height: `{blocksize*2}`,
        svg: `<rect width="{blocksize}" height="{blocksize}" fill="#C4C4C4" fill-opacity="0.26"/>
<rect x="{blocksize}" width="{blocksize}" height="{blocksize}" fill="#C4C4C4" fill-opacity="0.26"/>
<rect x="{blocksize*2}" width="{blocksize}" height="{blocksize}" fill="#C4C4C4" fill-opacity="0.26"/>
<rect x="{blocksize*2}" y="{blocksize}" width="{blocksize}" height="{blocksize}" fill="#C4C4C4" fill-opacity="0.26"/>`
    },
    8 : {
        width: `{blocksize*3}`,
        height: `{blocksize*2}`,
        svg: `<rect y="{blocksize}" width="{blocksize}" height="{blocksize}" fill="#F2196C" fill-opacity="0.26"/>
<rect x="{blocksize*2}" width="{blocksize}" height="{blocksize}" fill="#F2196C" fill-opacity="0.26"/>
<rect x="{blocksize*2}" y="{blocksize}" width="{blocksize}" height="{blocksize}" fill="#F2196C" fill-opacity="0.26"/>
<rect x="{blocksize}" y="{blocksize}" width="{blocksize}" height="{blocksize}" fill="#F2196C" fill-opacity="0.26"/>
<rect width="{blocksize}" height="{blocksize}" fill="#F2196C" fill-opacity="0.26"/>`
    },
    9 : {
        width: `{blocksize*3}`,
        height: `{blocksize*2}`,
        svg: `<rect x="{blocksize*2}" y="{blocksize}" width="{blocksize}" height="{blocksize}" fill="#94CF7B" fill-opacity="0.26"/>
<rect x="{blocksize}" y="{blocksize}" width="{blocksize}" height="{blocksize}" fill="#94CF7B" fill-opacity="0.26"/>
<rect y="{blocksize}" width="{blocksize}" height="{blocksize}" fill="#94CF7B" fill-opacity="0.26"/>
<rect x="{blocksize}" width="{blocksize}" height="{blocksize}" fill="#94CF7B" fill-opacity="0.26"/>
<rect width="{blocksize}" height="{blocksize}" fill="#94CF7B" fill-opacity="0.26"/>`
    },
    10 : {
        width: `{blocksize*3}`,
        height: `{blocksize*3}`,
        svg: `<rect x="{blocksize*2}" y="{blocksize*2}" width="{blocksize}" height="{blocksize}" fill="#F2196C" fill-opacity="0.26"/>
<rect x="{blocksize}" y="{blocksize*2}" width="{blocksize}" height="{blocksize}" fill="#F2196C" fill-opacity="0.26"/>
<rect y="{blocksize*2}" width="{blocksize}" height="{blocksize}" fill="#F2196C" fill-opacity="0.26"/>
<rect y="{blocksize}" width="{blocksize}" height="{blocksize}" fill="#F2196C" fill-opacity="0.26"/>
<rect width="{blocksize}" height="{blocksize}" fill="#F2196C" fill-opacity="0.26"/>`
    }
}

function transformTemplate(template, blocksize){
    return template.replace(/{blocksize(\*(\d+))?}/g, (_, __, multiplier) => 
        multiplier ? String(blocksize * Number(multiplier)) : String(blocksize)
    );
}

function convertPuzzlePiece(puzzlePiece, blocksize){
    return {
        width: transformTemplate(puzzlePiece.width, blocksize),
        height: transformTemplate(puzzlePiece.height, blocksize),
        svg: transformTemplate(puzzlePiece.svg, blocksize)
    }
}

function createSVG(width, height, puzzleSvg){
    const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute('width', width);
    svgElement.setAttribute('height', height);
    svgElement.setAttribute('viewBox', `0 0 ${width} ${height}`);
    svgElement.innerHTML = puzzleSvg;
    return svgElement;
}

export function changePuzzlePieceSize(index, piece, blocksize){
    const rotation = parseInt(piece.getAttribute('data-rotation') || 0);
    const isFlipped = piece.getAttribute('data-flipped') === 'true';

    const puzzlePiece = convertPuzzlePiece(puzzlePiecesPaths[index], blocksize);
    const width = puzzlePiece.width;
    const height = puzzlePiece.height;
    const puzzleSvg = puzzlePiece.svg;
    
    piece.style.width = width + 'px';
    piece.style.height = height + 'px';

    const svgElement = piece.querySelector('svg');
    svgElement.setAttribute('width', width);
    svgElement.setAttribute('height', height);
    svgElement.setAttribute('viewBox', `0 0 ${width} ${height}`);
    svgElement.innerHTML = puzzleSvg;

    piece.style.transform = `rotate(${rotation}deg) scaleX(${isFlipped ? -1 : 1})`; // Restore transform
}

export function createPuzzlePiece(index, blocksize) {
    const puzzlePiece = convertPuzzlePiece(puzzlePiecesPaths[index], blocksize);
    const width = puzzlePiece.width;
    const height = puzzlePiece.height;
    const puzzleSvg = puzzlePiece.svg;

    // Create wrapper div
    const wrapperDiv = document.createElement('div');
    wrapperDiv.style.position = 'relative';
    wrapperDiv.style.width = width + 'px';
    wrapperDiv.style.height = height + 'px';
    wrapperDiv.style.display = 'inline-block';
    wrapperDiv.setAttribute('draggable', 'true');
    wrapperDiv.appendChild(createSVG(width, height, puzzleSvg));
    
    const contentDiv = document.getElementById('peices');
    contentDiv.appendChild(wrapperDiv);

    return wrapperDiv;
}