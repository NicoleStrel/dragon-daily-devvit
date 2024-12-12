import { Devvit, useState} from '@devvit/public-api';
import {Page} from '../types/Page.js';
import {PuzzlePiece} from '../components/PuzzlePiece.js';

export interface SolvePageProps {
    setPage: (page: Page) => void;
}
export const Solve = (props: SolvePageProps): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { setPage } = props;
  const showPuzzlePeices = (startIndex: number) => {
    return Array.from({ length: 5 }, (_, i) => i + startIndex).map((i) => {
        if (selectedIndex == i){
            console.log("Selected Index: " + selectedIndex);
        }
        return (
        <>
            <PuzzlePiece 
                blocksize={30} 
                index={i}
                onMouseDown={() => console.log("hi")} //setSelectedIndex(i)
                onMouseUp={() => setSelectedIndex(null)}
            />
            <spacer size="small" />
        </>)
    });
  }
  return (
    <zstack height="100%" width="100%">
        <hstack gap="medium" padding="medium">
            <vstack alignment="top left" grow>
                <text>Solve</text>
                <button icon="close" onPress={() => setPage('home')} />
            </vstack>
            <spacer grow />
            <vstack alignment="top right" grow>
                {showPuzzlePeices(1)}
            </vstack>
            <vstack alignment="top right" grow>
                {showPuzzlePeices(6)}
            </vstack>
        </hstack>
    </zstack>
  );
};