export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomFloat(min: number, max: number, decimals = 1): number {
  return parseFloat((Math.random() * (max - min) + min).toFixed(decimals));
}

export function randomItem<T>(arr: T[]): T {
  return arr[randomInt(0, arr.length - 1)];
}

export function randomItems<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function randomPastTimestamp(maxHoursAgo = 72): string {
  const ms = Date.now() - randomInt(0, maxHoursAgo * 60 * 60 * 1000);
  return new Date(ms).toISOString();
}

export function seededId(prefix: string, index: number, pad = 3): string {
  return `${prefix}-${String(index).padStart(pad, "0")}`;
}