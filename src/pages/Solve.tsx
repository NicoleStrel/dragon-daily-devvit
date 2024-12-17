import { Devvit, RedisClient} from '@devvit/public-api';
import { Page, WebViewMessage} from '../types/types.js';
import { setUserScore } from '../utils/redis.js';
import { timeToSeconds } from '../utils/time.js';
export interface SolvePageProps {
    setPage: (page: Page) => void;
    userName: string;
    redis: RedisClient;
}
export const Solve = (props: SolvePageProps): JSX.Element => {
  const { setPage, userName, redis } = props;

  const onMessage = async (msg: WebViewMessage) => {
    switch (msg.type) {
      case 'result':
        await setUserScore(userName, timeToSeconds(msg.data.timeStr), redis)
        setPage('home')
        break;
      default:
        console.error('Unknown message type', msg);
    }
  }

  return (
    <webview
        id="myWebView"
        url="page.html"
        onMessage={(msg) => onMessage(msg as WebViewMessage)}
        grow
        height='100%'
      />
  );
};
