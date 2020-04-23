import chalk from "chalk";
const log = (chars: string[], left: number, right: number) => {
  const arr = chars.map((c, i) => {
    if (i === left) {
      if (i === right) {
        return chalk.magenta(c);
      } else {
        return chalk.red(c);
      }
    } else if (i === right) {
      return chalk.blueBright(c);
    } else {
      return c;
    }
  }).join(",");
  console.log(`[${arr}]`);
};

const Solution = (s: string): number => {
  if (s === "") return 0;
  const chars = s.split("");
  const contains: any = {};
  let max = 0, left = 0, right = 0;
  for (; right < chars.length; right++) {
    const char = chars[right];
    if (contains[char]) {
      while (left <= right) {
        if (chars[left] === char) {
          left++;
          break;
        }
        contains[chars[left]] = false;
        left++;
      }
    } else {
      contains[char] = true;
    }
    max = Math.max(max, right - left + 1);
    /* log(chars, left, right); */
  }
  return max;
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
