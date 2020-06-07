import { TreeNode, Tree } from "../../helpers/tree";

const serialize = (root: TreeNode): any[] => {
  const queue = [root];
  let index = 0;
  const arr = [];
  while (queue.length >= index) {
    const target = queue[index];
    if (target) {
      arr.push(target.val);
      queue.push(target.left, target.right);
    } else {
      arr.push(null);
    }
    index++;
  }

  return arr;
};

const deserialize = (data: any[]): TreeNode => {
  if (!data.length) return null;
  const root: any = { val: data[0], left: null, right: null };
  const parents = [root];
  let index: any = [0, false]; // index and left
  for (let i = 1; i < data.length; i++) {
    const parent = parents[index[0]];
    if (!parent) break;
    const node: any = data[i] === null ? null : { val: data[i], left: null, right: null };
    if (!index[1]) {
      parent.left = node;
      index[1] = true;
    } else {
      parent.right = node;
      index = [index[0] + 1, false];
    }
    if (node) {
      parents.push(node);
    }
  }
  return root;
};

const Solution = () => {
  const tree = Tree.from([1, null, 2, null, null, null, 3]);
  const data = deserialize(serialize(tree));
  console.log(tree);
  console.log(data);

  return true;
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
