import path from "path";
import prompts from "prompts";
import dirTree from "directory-tree";

export const getProblemList = (): string[] => {
  return dirTree(path.join(process.cwd(), "src", "problems")).children.map(x => x.name);
};

export const selectProblem = async (): Promise<string> => {
  const raw = getProblemList();
  const problems = raw.map(x => {
    return {
      title: x,
      value: x,
    };
  });

  const { value } = await prompts({
    type: "autocomplete",
    name: "value",
    message: "Select problem",
    choices: problems,
  });

  if (!value) {
    console.log("No problem selected");
    process.exit(0);
  }
  return value;
};
