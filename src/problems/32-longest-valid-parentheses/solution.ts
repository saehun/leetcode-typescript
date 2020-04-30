

const Solution = (s: string): number => {
  const stack = [];
  const check = Array(s.length).fill(false);

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === ")") {
      if (stack.length === 0) {
        continue;
      } else {
        const matched = stack.pop();
        check[matched] = true;
        check[i] = true;
      }
    } else {
      stack.push(i);
    }
  }

  let max = 0;
  let curMax = 0;
  for (let i = 0; i < s.length; i++) {
    if (check[i]) {
      curMax++;
    } else {
      max = Math.max(max, curMax);
      curMax = 0;
    }
  }

  return Math.max(max, curMax);
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
