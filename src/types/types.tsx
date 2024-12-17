import { RedisClient} from '@devvit/public-api';

export type Page = 'home' | 'leaderboard' | 'solve';

export type ScoreEntry = {
    member: string;
    score: number;
  };

export type WebViewMessage =
| {
    type: 'result';
    data: { timeStr: string };
}

export interface PageProps {
    setPage: (page: Page) => void;
    userName: string;
    redis: RedisClient;
}