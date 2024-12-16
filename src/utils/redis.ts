import type {RedisClient, ZRangeOptions,} from '@devvit/public-api';
import type {ScoreEntry} from '../types/ScoreEntry.js';
import { defaultUser } from '../Router.js';

const scoreKey: string = 'cache:score'

export async function getUserScore(userName: string | null, redis: RedisClient): Promise<number> {
    const defaultValue = -1;
    if (!userName) return defaultValue;
    const score = await redis.zScore(scoreKey, userName);
    return score || defaultValue;
}

export async function setUserScore(userName: string, score: number, redis: RedisClient): Promise<void> {
    if (userName != defaultUser){
        await redis.zAdd(scoreKey, { score: score, member: userName });
    }
}

export async function getScores(userName: string, maxLength: number = 10, redis: RedisClient): Promise<{scores: ScoreEntry[], userScore: number}> {
    var userScore: number = -1;
    var scores: ScoreEntry[] = [];
    try {
        const options: ZRangeOptions = { reverse: false, by: 'rank' };
        scores =  await redis.zRange(scoreKey, 0, maxLength - 1, options);
        if (userName != defaultUser){
            userScore =  await getUserScore(userName, redis);
        }
    } catch (error) {
        if (error) {
          console.error('Error fetching Leaderboard', error);
          throw error;
        }
    }
    return {
        scores: scores,
        userScore: userScore
    };
}
