const Solution = (s: string): number => {
  if (s === "") return 0;
  const pointer: any = { startAt: 0, length: 0, contains: {} };
  let max = 0;
  const characters = s.split("");

  for (let i = 0; i < characters.length; i++) {
    const char = characters[i];
    if (pointer.contains[char]) {
      i = pointer.startAt + 1;
      pointer.startAt = i;
      pointer.length = 1;
      pointer.contains = { [characters[pointer.startAt]]: true };
    } else {
      pointer.length++;
      pointer.contains[char] = true;
    }
    max = Math.max(max, pointer.length);
  }
  return max;
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
