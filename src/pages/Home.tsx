import { Devvit} from '@devvit/public-api';
import {DateComponent} from '../components/DateComponent.js';
import {Page} from '../types/types.js';

export interface HomePageProps {
    setPage: (page: Page) => void;
}
export const Home = (props: HomePageProps): JSX.Element => {
  const { setPage } = props;
  return (
    <vstack height="100%" width="100%" alignment="center">
        <spacer size="large"/>
        <spacer size="large"/>
        <spacer size="large"/>
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
            <button onPress={() => setPage('solve')}>Solve</button>
            <spacer size="medium" />
            <button onPress={() => setPage('leaderboard')}>Leaderboard</button>
            <spacer grow/>
            <text>Note: Only available on web!</text>
            <spacer size="small" />
        </vstack>
    </vstack>
  );
};