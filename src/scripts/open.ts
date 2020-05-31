import { selectProblem } from "./utils";
import execa from "execa";

async function main() {
  const problem = await selectProblem();
  execa("open", [`https://leetcode.com/problems/${problem.split("-").slice(1).join("-")}`]);
}

main();
