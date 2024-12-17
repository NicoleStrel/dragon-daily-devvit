import { Devvit, useState, useAsync} from '@devvit/public-api';
import {Home} from './pages/Home.js';
import {Page} from './types/types.js';
import {Solve} from './pages/Solve.js';
import {Leaderboard} from './pages/Leaderboard.js';
import type { Context } from '@devvit/public-api';

export const defaultUser = 'anon';

export const Router = (context: Context): JSX.Element => {
  const [page, setPage] = useState<Page>('home');
  const userCacheKey = 'cache:username';
  

  const getUsername = async (): Promise<string> => {
    if (!context.userId) return defaultUser; 
    try {
        const cache = await context.redis.hGet(userCacheKey, context.userId);
        if (cache) {
            return cache;
        } else {
            const user = await context.reddit.getUserById(context.userId);
            if (user) {
                await context.redis.hSet(userCacheKey, {
                    [context.userId]: user.username,
                });
                return user?.username ?? defaultUser;
            }
        }
    } catch (error) {
        console.error('Error fetching user', error);
    }
    return defaultUser;
  };
  
  const { data: userName } = useAsync(async () => await getUsername());

  const findPage = () => {
    if (page === 'home') {
        return <Home setPage={setPage}/>
    } else if (page === 'solve') {
        return <Solve setPage={setPage} userName={userName || defaultUser} redis={context.redis}/>
    } else if (page === 'leaderboard') {
        return <Leaderboard setPage={setPage} userName={userName || defaultUser} redis={context.redis}/>
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


