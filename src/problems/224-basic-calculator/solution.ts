

const stripParen = (expr: string): string => expr[0] === "(" ? expr.slice(1, expr.length - 1) : expr;
const isTerminal = (expr: string) => !isNaN(Number(expr)) || expr === "+" || expr === "-";
const sanitize = (s: string) => s.split("").filter(x => x !== " ").join("");
const parse = (expr: string): any => {
  if (isTerminal(expr)) return expr;
  let i = expr.length - 1;
  if (expr[i] === ")") {
    let paren = 1;
    while (paren !== 0) {
      i--;
      if (expr[i] === "(") paren--;
      if (expr[i] === ")") paren++;
    }
    i--;
  } else {
    while (expr[i] !== "+" && expr[i] !== "-") i--;
  }
  if (i === -1) return parse(stripParen(expr));
  return [
    parse(expr.slice(0, i)),
    parse(expr.slice(i, i + 1)),
    parse(expr.slice(i + 1)),
  ];
};

const evaluate = (AST: any): number => {
  if (typeof AST === "string") {
    return Number(AST);
  } else {
    if (AST[1] === "+") {
      return evaluate(AST[0]) + evaluate(AST[2]);
    } else {
      return evaluate(AST[0]) - evaluate(AST[2]);
    }
  }
};


const calculate = (s: string): number => {
  return evaluate(parse(sanitize(s)));
};

export default {
  "default": calculate,
  validator: (x: any) => x,
};
