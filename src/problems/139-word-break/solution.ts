type WordBreak = (s: string, wordDict: string[]) => boolean;


/**
 * Memoization version
 */
const matchRecur = (s: string, wordDict: string[], result: boolean, cache: any): boolean => {
  if (cache[s]) return false;

  for (let i = 0; i < wordDict.length; i++) {
    const word = wordDict[i];
    if (word.length > s.length) continue;

    if (s.startsWith(word)) {
      if (s.length === word.length) {
        return true;
      } else {
        result = result || matchRecur(s.slice(word.length), wordDict, result, cache);
        cache[s] = true;
      }
    }
  }
  return result;
};

const Memoization: WordBreak = function(s, wordDict) {
  const cache = {};
  return matchRecur(s, wordDict, false, cache);
};


/**
 * Dynamic programming version
 */
const DP: WordBreak = function(s, wordDict) {
  const cache: any = { "-1": true };
  for (let i = -1; i < s.length - 1; i++) {
    if (!cache[i]) continue;
    for (const word of wordDict) {
      if (cache[i + word.length]) continue;
      if (s.startsWith(word, i + 1)) {
        cache[i + word.length] = true;
        if (i + word.length === s.length - 1) return true;
      }
    }
  }

  return false;
};

export default {
  "default": DP,
  Memoization,
  DP,
};
