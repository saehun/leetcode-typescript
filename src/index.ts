import * as raw from "./problems";
import R from "ramda";
import { program } from "commander";
import chalk from "chalk";

const problems: Record<string, any> = raw;
const run = (fn: any, test: { input: unknown[]; output: unknown }, title: string) => {

  let inputString = "";
  try {
    inputString = JSON.stringify(test.input);
  } catch (e) {
    inputString = (e.message);
  }

  console.log(`
${title} runs:
- input: ${inputString}
- output:
    - expected: ${JSON.stringify(test.output)}`);
  const result = fn(...test.input);
  console.log(`    - received: ${JSON.stringify(result)}`);
  if (R.equals(result, test.output)) {
    console.log(`- result: ${chalk.green("success")}`);
  } else {
    console.log(`- result: ${chalk.red("fail")}`);
  }
};

program
  .command("run <problem>")
  .option("-t, --test <items>", "Comma seperated ids of testcase")
  .option("-s, --solution <value>", "Solution name. using default when doesn't specified")
  .action((problemId: string, options: any) => {
    const problem = problems[`p${problemId}`];
    const testcaseIds: string = options.test;
    if (!problem) {
      console.log(`No problem of id ${chalk.yellow(problemId)} was found.`);
      process.exit(1);
    }

    const solutionName = options.solution || "default";
    if (solutionName === "default") {
      console.log("No solution was specified. using default instead.");
    }
    console.log(`Solve the problem ${chalk.yellow(problemId)} using ${chalk.yellow(solutionName)} solution`);
    const solution = problem.solution["default"];

    if (!solution) {
      console.log(`No solution named ${chalk.yellow(solutionName)} of problem id ${chalk.yellow(problemId)} was found.`);
      process.exit(1);
    }

    const caseIds = testcaseIds ? testcaseIds.split(",").map(x => x.trim()) : Object.keys(problem.testcase);
    const testcases = [];
    for (const caseId of caseIds) {
      const testcase = problem.testcase[caseId];
      if (!testcase) {
        console.log(`No ${chalk.yellow(caseId)}th-testcase of problem ${problemId} was found.`);
        process.exit(1);
      }
      testcases.push(testcase);
    }

    testcases.forEach((testcase, i) => {
      run(
        solution,
        testcase,
        `testcase-${chalk.yellow(i)}`
      );
    });
  });

program.parse(process.argv);
