import { Devvit} from '@devvit/public-api';

export interface PuzzlePieceProps {
   index: number;
   blocksize: number;
   onMouseDown?: () => void;
   onMouseUp?: () => void;
}

type PuzzlePieceInfo = {
    width: string;
    height: string;
    svg: string;
};

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

export const PuzzlePiece = (props: PuzzlePieceProps): JSX.Element => {
    const { index, blocksize, onMouseDown, onMouseUp} = props;
    
    const transformTemplate = (template: string, blocksize: number) => {
        return template.replace(/{blocksize(\*(\d+))?}/g, (_, __, multiplier) => 
            multiplier ? String(blocksize * Number(multiplier)) : String(blocksize)
        );
    }
    const convertPuzzlePiece = (puzzlePiece: PuzzlePieceInfo, blocksize: number) => {
        return {
            width: transformTemplate(puzzlePiece.width, blocksize),
            height: transformTemplate(puzzlePiece.height, blocksize),
            svg: transformTemplate(puzzlePiece.svg, blocksize)
        }
    }
    const puzzlePiece = convertPuzzlePiece(puzzlePiecesPaths[index], blocksize);
    const width = puzzlePiece["width"];
    const height = puzzlePiece["height"];
    const puzzleSvg = puzzlePiece["svg"];
    const svgpath = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg"> ${puzzleSvg}</svg>`;
    const desc = `Puzzle piece ${index}`;
    return (
        <image
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            imageWidth={width}
            imageHeight={height}
            height={`${height}px`}
            width={`${width}px`}
            description={desc}
            resizeMode="fill"
            url={`data:image/svg+xml,${svgpath}`}
        />
    );
};