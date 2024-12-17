import { Devvit, useState, useInterval } from '@devvit/public-api';

export const DateComponent = (): JSX.Element => {
    const getDaySuffix = (day: number) => {
        if (day >= 11 && day <= 13) return 'th';
        switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
        }
    };

    const getFormattedDate = () => {
        const today = new Date();
        const dayOfWeek = today.toLocaleString('en-US', { weekday: 'long', timeZone: 'UTC' });
        const month = today.toLocaleString('en-US', { month: 'long', timeZone: 'UTC' });
        const day = today.getUTCDate();
        const suffix = getDaySuffix(day);

        return `${dayOfWeek}, ${month} ${day}${suffix} (UTC)`;
    };

    const [date, setDate] = useState(() => getFormattedDate());
    const tick = () => setDate(() => getFormattedDate());
    useInterval(tick, 1000).start();
  return (
      <text>{date}</text>
  );
};
