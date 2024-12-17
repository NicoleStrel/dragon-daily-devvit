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