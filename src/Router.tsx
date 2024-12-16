import { Devvit, useState} from '@devvit/public-api';
import {Home} from './pages/Home.js';
import {Page} from './types/Page.js';
import {Solve} from './pages/Solve.js';
import {Leaderboard} from './pages/Leaderboard.js';

export const Router = (): JSX.Element => {
  const [page, setPage] = useState<Page>('home');
  const findPage = () => {
    if (page === 'home') {
        return <Home setPage={setPage}/>
    } else if (page === 'solve') {
        return <Solve setPage={setPage}/>
    } else if (page === 'leaderboard') {
        return <Leaderboard setPage={setPage}/>
    }
  }
  return (
    page === 'solve' ? (
        <blocks>
        {findPage()}
        </blocks>
    ) : (
        <zstack width="100%" height="100%" alignment="top start">
            <image
                imageHeight={1024}
                imageWidth={2048}
                height="100%"
                width="100%"
                url="DragonDailyBackground.png"
                description="Gradient background"
                resizeMode="cover"
            />
            {findPage()}
        </zstack>
    )
  );
};


