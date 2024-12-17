import { Devvit, useAsync} from '@devvit/public-api';
import {DateComponent} from '../components/DateComponent.js';
import { getUserScore } from '../utils/redis.js';
import {PageProps} from '../types/types.js';
import { LoadingComponent } from '../components/LoadingComponent.js';

export const Home = (props: PageProps): JSX.Element => {
  const { setPage, userName, redis } = props;
  const {data: userScore, loading, error} = useAsync(async () => await getUserScore(userName, redis));
  
  return (
    <vstack height="100%" width="100%" alignment="center">
        <spacer size="large"/>
        <spacer size="large"/>
        <spacer size="large"/>
        {loading && <LoadingComponent/>}
        {error && <text>Error fetching data</text>}
        {!loading && !error && userScore && (
          <vstack alignment="center middle" width="100%" height="100%" grow> 
              <image
                  imageHeight={150}
                  imageWidth={355}
                  url="DragonDailyLogo.png"
                  description="Dragon Daily Logo"
              />
              <spacer size="medium" />
              <text>Solve the DragonFjord puzzle for:</text>
              <DateComponent/>
              <spacer size="medium" />
              <button onPress={() => setPage('solve')} disabled={userScore != -1}>Solve</button>
              {userScore != -1 && <text>Already solved for today!</text>}
              <spacer size="medium" />
              <button onPress={() => setPage('leaderboard')}>Leaderboard</button>
              <spacer grow/>
              <text>Note: Only available on web!</text>
              <spacer size="small" />
          </vstack>
        )}
    </vstack>
  );
};