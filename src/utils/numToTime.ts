export const numToTime = (time: number) => {
  const left = Math.floor(time / 60);
  const right = Math.floor(time % 60)
    .toString()
    .substring(0, 2);
  return `${left}:${right.length === 1 ? `0${right}` : right}`;
};
