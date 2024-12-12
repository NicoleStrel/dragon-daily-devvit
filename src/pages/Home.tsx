import { Devvit} from '@devvit/public-api';
import {DateComponent} from '../components/DateComponent.js';
import {Page} from '../types/Page.js';

export interface HomePageProps {
    setPage: (page: Page) => void;
}
export const Home = (props: HomePageProps): JSX.Element => {
  const { setPage } = props;
  return (
    <zstack height="100%" width="100%" alignment="center middle">
        <vstack alignment="center middle" grow>
            <image
                imageHeight={150}
                imageWidth={355}
                url="DragonDailyLogo.png"
                description="Dragon Daily Logo"
            />
            <text>Today's date is:</text>
            <DateComponent/>
            <button onPress={() => setPage('solve')}>Solve</button>
            <button onPress={() => setPage('leaderboard')}>Leaderboard</button>
        </vstack>
    </zstack>
  );
};