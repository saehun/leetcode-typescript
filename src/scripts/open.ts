import { selectProblem } from "./utils";
import execa from "execa";

async function main() {
  const problem = await selectProblem();


  /* execa("open", []); */
}

main();
