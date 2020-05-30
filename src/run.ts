import R from "ramda";
import chalk from "chalk";
import * as problem from "./problems/21-merge-two-sorted-list";
const testcaseIds: string = "";
const problemId = "21";

const toString = (obj: any) => {
  try {
    return JSON.stringify(obj);
  } catch (e) {
    return e.message;
  }
};

const run = (fn: any, validator: any, test: { input: unknown[]; output: unknown }, title: string) => {
  console.log(`
${title} runs:
- input: ${toString(test.input)}
- output:
    - expected: ${toString(validator(test.output))}`);
  const result = fn(...test.input);
  console.log(`    - received: ${toString(validator(result))}`);
  if (R.equals(validator(result), validator(test.output))) {
    console.log(`- result: ${chalk.green("success")}`);
  } else {
    console.log(`- result: ${chalk.red("fail")}`);
  }
};

const main = () => {
  console.log(`Solve the problem ${chalk.yellow(problemId)}`);
  const solution = problem.solution.default;
  const validator = problem.solution.validator || ((x: any) => x);

  const caseIds = testcaseIds ? testcaseIds.split(",").map(x => x.trim()) : Object.keys(problem.testcase);
  const testcases = [];
  for (const caseId of caseIds) {
    const testcase = problem.testcase[caseId as any];
    if (!testcase) {
      console.log(`No ${chalk.yellow(caseId)}th-testcase of problem ${problemId} was found.`);
      process.exit(1);
    }
    testcases.push(testcase);
  }

  testcases.forEach((testcase, i) => {
    run(
      solution,
      validator,
      testcase,
      `testcase-${chalk.yellow(i)}`
    );
  });
};

main();
