

const Solution = (s: string): number => {
  let max = 0;
  let leftCount = 0;
  let rightCount = 0;
  let lastIndex = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === ")") rightCount++;
    if (char === "(") leftCount++;

    if (rightCount > leftCount) {
      max = Math.max(max, leftCount + rightCount - 1);
      leftCount = 0;
      rightCount = 0;
      lastIndex = i + 1;
    }
    console.log(`i=${i} char=${s[i]} leftCount=${leftCount} rightCount=${rightCount} max=${max} lastIndex=${lastIndex}`);
  }

  console.log("----------");
  for (let i = s.length - 1; i > lastIndex - 1; i--) {
    const char = s[i];
    if (char === ")") break;
    leftCount--;
    console.log(`i=${i} char=${s[i]} leftCount=${leftCount} rightCount=${rightCount} max=${max} lastIndex=${lastIndex}`);
  }

  for (let i = lastIndex; i < s.length; i++) {
    const char = s[i];
    if (leftCount === rightCount && s[i] === "(") break;
    if (char === ")") rightCount--;
    if (char === "(") leftCount--;
    console.log(`i=${i} char=${s[i]} leftCount=${leftCount} rightCount=${rightCount} max=${max} lastIndex=${lastIndex}`);
  }

  max = Math.max(max, leftCount + rightCount);

  return max;
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
