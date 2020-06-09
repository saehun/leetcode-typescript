function Solution(s: string): string {
  let parens = 0;
  let tmp = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      parens++;
      tmp += s[i];
    } else if (s[i] === ")") {
      if (parens > 0) {
        tmp += s[i];
        parens--;
      } else {
        continue;
      }
    } else {
      tmp += s[i];
    }
  }

  parens = 0;
  let result = "";
  for (let i = tmp.length - 1; i >= 0; i--) {
    if (tmp[i] === ")") {
      parens++;
      result += tmp[i];
    } else if (tmp[i] === "(") {
      if (parens > 0) {
        result += tmp[i];
        parens--;
      } else {
        continue;
      }
    } else {
      result += tmp[i];
    }
  }
  return result.split("").reverse().join("");
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
