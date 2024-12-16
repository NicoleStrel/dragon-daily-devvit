import { Devvit, useState} from '@devvit/public-api';
import {Page} from '../types/Page.js';
import {WebViewMessage} from '../types/WebViewMessage.js';

export interface SolvePageProps {
    setPage: (page: Page) => void;
}
export const Solve = (props: SolvePageProps): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { setPage } = props;
  // const showPuzzlePeices = (startIndex: number) => {
  //   return Array.from({ length: 5 }, (_, i) => i + startIndex).map((i) => {
  //       if (selectedIndex == i){
  //           console.log("Selected Index: " + selectedIndex);
  //       }
  //       return (
  //       <>
  //           <PuzzlePiece 
  //               blocksize={30} 
  //               index={i}
  //               onMouseDown={() => console.log("hi")} //setSelectedIndex(i)
  //               onMouseUp={() => setSelectedIndex(null)}
  //           />
  //           <spacer size="small" />
  //       </>)
  //   });
  // }

  const onMessage = async (msg: WebViewMessage) => {
    console.log('Message received', msg);
  }

  return (

    <webview
        id="myWebView"
        url="page.html"
        onMessage={(msg) => console.log(msg)}
        grow
        height='100%'
      />

    // <zstack height="100%" width="100%">
    // <vstack grow height='100%'>
    //       <vstack border="thick" borderColor="black" height='100%'>
    //         <webview
    //           id="myWebView"
    //           url="page.html"
    //           onMessage={(msg) => onMessage(msg as WebViewMessage)}
    //           grow
    //           height='100%'
    //         />
    //       </vstack>
    //   </vstack>
    // </zstack>
    // <zstack height="100%" width="100%">
    //     <hstack gap="medium" padding="medium">
    //         <vstack alignment="top left" grow>
    //             <text>Solve</text>
    //             <button icon="close" onPress={() => setPage('home')} />
    //         </vstack>
    //         {/* </vstack>
    //         <spacer grow />
    //         <vstack alignment="top right" grow>
    //             {showPuzzlePeices(1)}
    //         </vstack>
    //         <vstack alignment="top right" grow>
    //             {showPuzzlePeices(6)}
    //         </vstack> */}
    //         <vstack grow height='100%'>
    //           <vstack height='100%'>
    //             <webview
    //                 id="myWebView"
    //                 url="page.html"
    //                 onMessage={(msg) => onMessage(msg as WebViewMessage)}
    //                 grow
    //                 height='100%'
    //                 width='100%'
    //               />
    //           </vstack>
    //         </vstack>
    //     </hstack>
    // </zstack>
  );
};
