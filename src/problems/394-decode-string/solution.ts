
const multiplyString = (s: string): string => {
  let index = 0;
  let multiplied = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "[") {
      break;
    }
    index++;
  }

  const multiplier = parseInt(s.slice(0, index));
  const str = s.slice(index + 1);

  for (let i = 0; i < multiplier; i++) {
    multiplied += str;
  }

  return multiplied;
};

const Solution = (s: string): string => {
  const stack = [];
  let str = "";
  let isParsingNumber = false;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!isNaN(parseInt(char))) {
      if (isParsingNumber) {
        stack[stack.length - 1] += char;
      } else {
        stack.push(char);
        isParsingNumber = true;
      }
    } else if (char === "]") {
      isParsingNumber = false;
      const last = stack.pop();
      const multiplied = multiplyString(last);
      if (stack.length === 0) {
        str += multiplied;
      } else {
        stack[stack.length - 1] += multiplied;
      }
    } else {
      isParsingNumber = false;
      if (stack.length === 0) {
        str += char;
      } else {
        stack[stack.length - 1] += char;
      }
    }
  }

  return str;
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
