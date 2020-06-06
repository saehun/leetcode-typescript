// babad -> bab or aba
// cbbd  -> bb


// Expand center
const ExpandCenter = (s: string): string => {
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


const Solution = (s: string): string => {
  const arr: [number, boolean][] = [[0, true]]; // arr[x][1] === true when composed with single character

  for (let i = 1; i < s.length; i++) {
    const [matchedIndex, homoChar] = arr[i - 1];
    if (homoChar) { // c, ccc, ccccc
      if (s[i] === s[matchedIndex - 1]) {
        arr.push([matchedIndex - 1, false]);
      } else if (s[i] === s[matchedIndex]) {
        arr.push([matchedIndex, true]);
      } else {
        arr.push([i, true]);
      }
    } else {
      if (s[i] === s[matchedIndex - 1]) {
        arr.push([matchedIndex - 1, false]);
      } else if (s[i] === s[i - 1]) {
        arr.push([i - 1, true]);
      } else if (s[i] === s[i - 2]) {
        arr.push([i - 2, false]);
      } else {
        arr.push([i, true]);
      }
    }
  }

  console.log(arr);
  let max = [0, 0];
  for (let i = 0; i < s.length; i++) {
    /* console.log(`length is ${i - arr[i][0] + 1}, prev is ${max[0]} at index ${i}`); */
    const length = i - arr[i][0] + 1;
    if (length > max[0]) {
      max = [length, i];
      /* console.log(`max refreshed, ${max} `); */
    }
  }
  console.log(max);

  return s.slice(max[1] - max[0] + 1, max[1] + 1);
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
