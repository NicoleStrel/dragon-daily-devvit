import { Devvit} from '@devvit/public-api';
import {Page} from '../types/Page.js';

export interface LeaderboardPageProps {
    setPage: (page: Page) => void;
}
export const Leaderboard = (props: LeaderboardPageProps): JSX.Element => {
  const { setPage } = props;
  return (
    <zstack height="100%" width="100%" alignment="center middle">
        <vstack alignment="center middle" grow>
            <text>Leaderboard</text>
            <button icon="close" onPress={() => setPage('home')} />
        </vstack>
    </zstack>
  );
};