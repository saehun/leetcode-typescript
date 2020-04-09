type WordBreak = (s: string, wordDict: string[]) => boolean;

const wordBreak: WordBreak = function(s, wordDict) {
  if (s.length === 0) return true;
  return wordDict.reduce(
    (result, word) => {
      if (word.length > s.length) return result;
      return result || (s.startsWith(word) ? wordBreak(s.slice(word.length), wordDict) : false);
    },
    false);
};


export default wordBreak;
