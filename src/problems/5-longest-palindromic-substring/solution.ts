// babad -> bab or aba
// cbbd  -> bb


// Expand center
const Solution = (s: string): string => {
  let palindrom = "";

  const expandCenter = (index: number) => {
    // expand odd palindrom from index
    let left = index, right = index;
    while (s[left] === s[right]) {
      if (!s[left] || !s[right]) break;
      left--;
      right++;
    }
    palindrom = right - left - 1 > palindrom.length ? s.slice(left + 1, right) : palindrom;

    left = index;
    right = index + 1;
    // expand even palindrom from index + 1
    while (s[left] === s[right]) {
      if (!s[left] || !s[right]) break;
      left--;
      right++;
    }
    palindrom = right - left - 1 > palindrom.length ? s.slice(left + 1, right) : palindrom;
  };

  for (let i = 0; i < s.length; i++) {
    expandCenter(i);
  }

  return palindrom;
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
