export function timeToSeconds(timeStr: string): number {
    // convert time string (MM:SS) to seconds number
    const [minutes, seconds] = timeStr.split(':').map(Number);
    return minutes * 60 + seconds;
}

export function secondsToTime(seconds: number): string {
    // convert seconds number to time string (MM:SS)
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}