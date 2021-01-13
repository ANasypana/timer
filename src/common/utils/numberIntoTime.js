export const toStr = number => number < 10 ? `0${number}` : `${number}`;

export const numberIntoTime = numbet => {
  const arr = [];
  const hour = Math.floor(numbet / 3600);
  arr.push(toStr(hour));
  const min = Math.floor((numbet - hour * 3600) / 60);
  arr.push(toStr(min));
  const sec = Math.floor(numbet - hour * 3600 - min * 60);
  arr.push(toStr(sec));
  return arr
}