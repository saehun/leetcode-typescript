type WordBreak = (s: string, wordDict: string[]) => boolean;

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

const wordBreak: WordBreak = function(s, wordDict) {
  const cache = {};
  return matchRecur(s, wordDict, false, cache);
};


/** Fail - time limit
  if (s.length === 0) return true;
  return wordDict.reduce(
    (result, word) => {
      if (word.length > s.length) return result;
      return result || (s.startsWith(word) ? wordBreak(s.slice(word.length), wordDict) : false);
    },
    false);
*/
/**
 *

applepenapple
1111100011111
0000011100000

catsandog
111100000
000000111
000111100
000011100
111000000

 */

export default wordBreak;
