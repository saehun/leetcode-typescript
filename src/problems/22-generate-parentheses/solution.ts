const Solution = (n: number): string[] => {
  const result: string[] = [];
  const recur = (left: number, right: number, text: string) => {
    if (left < right || left > n) return;
    if (left + right === n * 2) {
      return result.push(text);
    } else {
      recur(left + 1, right, text + "(");
      recur(left, right + 1, text + ")");
    }
  };
  recur(1, 0, "(");
  return result;
};

/**
 *

(defn generateParenthesis [n]
  (defn f [left right text]
    (if (or (< left right) (> left n))
      '()
      (if (== right n)
        (list text)
        (concat (f (+ left 1) right (str text \())
                (f left (+ 1 right) (str text \)))))))
    (f 1 0 "("))

generateParenthesis = (n) =>
  ((f = (left, right, text) =>
     (left < right || left > n) ? []
       : (right === n) ? [text]
       : [...f(left + 1, right, text + "("), ...f(left, right + 1, text + ")")]
    )(1, 0, "("), result);


 */


export default {
  "default": Solution,
  validator: (x: any) => x.sort().join("-"),
};
