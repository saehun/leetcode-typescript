
const match = (left: string, right: string) => {
  return /\[\]|\(\)|{}/.test(left + right);
};


const isValid = (s: string) => {
  const step = (input: string[], stack: string[]): boolean => {
    if (!input.length) {
      return stack.length === 0;
    } else {
      const parentheses = input.pop();
      if (match(stack[stack.length - 1], parentheses)) {
        stack.pop();
      } else {
        stack.push(parentheses);
      }
      return step(input, stack);
    }
  };

  return step(s.split("").reverse(), []);
};

export default {
  "default": isValid,
  isValid,
};
