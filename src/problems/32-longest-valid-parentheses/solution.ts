// time: 66%, space: 50%
const Solution2 = (s: string): number => {
  const stack = [];
  let max = 0;
  const cache: any = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === ")") {
      if (stack.length === 0) {
        continue;
      } else {
        const matched = stack.pop();
        const length = i - matched + 1 + (cache[matched - 1] || 0);
        max = Math.max(length, max);
        cache[i] = length;
      }
    } else {
      stack.push(i);
    }
  }

  return max;
};

// time: 80%, space: 100% ...why?
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

const Solution3 = (s: string): number => {
  const cache: any = {};
  const stack = [];
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      if (!stack.length) continue;
      const matched = stack.pop();
      const length = i - matched + 1 + (cache[matched - 1] || 0);
      max = Math.max(max, length);
      cache[i] = length;
    } else {
      stack.push(i);
    }
  }
  return max;
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
