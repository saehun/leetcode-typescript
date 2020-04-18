import prompts from "prompts";
import dirTree from "directory-tree";
import fs from "fs";
import chalk from "chalk";
import path from "path";

const sanitize = (s: string) => {
  return s.trim().split(" ").map(x => x.toLowerCase()).join(" ");
};

const toDashed = (s: string) => {
  return s.split(" ").map(x => x.trim()).join("-");
};

const toUpperCase = (s: string) => {
  return s.split(" ").map(x => {
    return x[0].toUpperCase() + x.slice(1);
  }).join(" ");
};

const README = (name: string) =>
  `# ${toUpperCase(name)}
[link](https://leetcode.com/problems/${toDashed(name)});

## Acknowledgement`;

const CASE = () => `export default [
  { input: [0], output: true },
];
`;

const INDEX = () => `export { default as testcase } from "./case";
export { default as solution } from "./solution";
`;

const SOLUTION = () => `const Solution = () => { };

export default {
  "default": Solution,
};
`;

const EXPORTS = (folderName: string, id: string) => `export * as p${id} from "./${folderName}";`;


(async () => {
  const { id } = await prompts({
    type: "text",
    name: "id",
    message: "What is ID(numeric) of the problem?",
  });
  if (Number.isNaN(Number(id))) {
    console.error(`ID must be numeric. given ${id}`);
    process.exit(1);
  }

  const name = sanitize((await prompts({
    type: "text",
    name: "name",
    message: "What is name of the problem?"
  })).name);

  const folderName = id + "-" + toDashed(name);

  const problems = dirTree(path.join(process.cwd(), "src", "problems"));

  /**
   * Check id is not exist.
   */
  if (!problems.children
    .map(x => x.name)
    .filter(x => x !== "index.ts")
    .every(problemName => {
      const matched = /^(\d+)-/.exec(problemName);
      if (!matched) {
        return true;
      } else {
        const numericId = matched[1];
        return numericId !== id;
      }
    })) {
    console.error(`ID already exists. '${id}'`);
    process.exit(1);
  }

  const confirm = await prompts({
    type: "confirm",
    name: "yes",
    message: `Add new problem:
${chalk.green("+")}/src/problems/${folderName}/README.md
${chalk.green("+")}/src/problems/${folderName}/index.ts
${chalk.green("+")}/src/problems/${folderName}/solution.ts
${chalk.green("+")}/src/problems/${folderName}/case.ts
${chalk.yellow("+")}/src/problems/index.ts`
  });

  if (confirm.yes) {
    const basePath = path.join(process.cwd(), "src", "problems");
    fs.mkdirSync(path.join(basePath, folderName));
    fs.writeFileSync(path.join(basePath, folderName, "README.md"), README(name));
    fs.writeFileSync(path.join(basePath, folderName, "case.ts"), CASE());
    fs.writeFileSync(path.join(basePath, folderName, "index.ts"), INDEX());
    fs.writeFileSync(path.join(basePath, folderName, "solution.ts"), SOLUTION());
    fs.appendFileSync(path.join(basePath, "index.ts"), EXPORTS(folderName, id));
  } else {
    console.log("Canceled");
    process.exit(0);
  }

})();
