import { Devvit, useAsync, RedisClient} from '@devvit/public-api';
import {Page} from '../types/Page.js';
import { getScores } from '../utils/redis.js';
import { secondsToTime } from '../utils/time.js';
import { LoadingComponent } from '../components/LoadingComponent.js';

export interface LeaderboardPageProps {
    setPage: (page: Page) => void;
    userName: string;
    redis: RedisClient;
}
export const Leaderboard = (props: LeaderboardPageProps): JSX.Element => {
  const { setPage, userName, redis } = props;
  const { data: data, loading, error } = useAsync(async () => await getScores(userName, 5, redis));
  
  return (
    <vstack height="100%" width="100%" alignment="center" padding="medium" gap="medium">
        {/* <vstack width="100%" alignment="center middle">
          <text size="xlarge">Leaderboard</text>
        </vstack> */}

        <hstack width="100%" alignment="middle">
          <spacer width="24px" />
            <text size="xxlarge">Today's Leaderboard</text>
          <spacer grow />
          <button icon="close" onPress={() => setPage('home')} />
          <spacer width="20px" />
        </hstack>
        <spacer size="medium" />
        {loading && <LoadingComponent/>}
        {error && <text>Error fetching data</text>}
        {!loading && !error && data && (
          <vstack gap="small" width="100%" height="100%" grow>
            {data.scores.length === 0 ? (
              <text>No scores on the leaderboard!</text>
            ) : (
              data.scores.map((entry, index) => ( //#EAEDEF alignment="center middle"
                <vstack>
                  <hstack key={`${index}`} backgroundColor="white" padding="medium" cornerRadius="medium" width="100%" alignment="center middle" grow>
                      <spacer size="medium"/>
                      <text size="xlarge" weight="bold">{index + 1}</text>
                      <spacer size="small"/>
                      <text>{entry.member}</text>
                      <spacer grow/>
                      <text>{secondsToTime(entry.score)}</text>
                      <spacer size="medium"/>
                  </hstack>
                  <spacer size="small"/>
                </vstack>
                
              ))
            )}
            <spacer grow/>
            <hstack alignment="bottom end">
                {data.userScore >= 0 && <text>Your Time: {secondsToTime(data.userScore)}</text>}
            </hstack>
          </vstack>
        )}  
    </vstack>
  );
};