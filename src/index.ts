import * as problem139 from "./139-word-break";
import R from "ramda";
const run = (fn: any, test: { input: unknown[]; output: unknown }, title: string) => {

  console.log(`
${title} runs:
- input: ${JSON.stringify(test.input)}
- output:
    - expected: ${JSON.stringify(test.output)}`);
  const result = fn(...test.input);
  console.log(`    - received: ${JSON.stringify(result)}\n`);
  if (R.equals(result, test.output)) {
    console.log("successed");
  } else {
    console.log("failed");
  }
};

function main() {
  for (const test of problem139.testcase) {
    run(problem139.solution, test, "139-word-break");
  }
}

main();
