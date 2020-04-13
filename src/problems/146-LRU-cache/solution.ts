import chalk from "chalk";

type Node = {
  key: number;
  next: Node;
  prev: Node;
}

type Item = {
  value: number;
  node: Node;
}

class LRUCache {
  capacity: number;
  used: number;
  head: Node;
  tail: Node;
  cache: Record<number, Item>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.used = 0;
    this.cache = {};
    this.head = null;
    this.tail = null;
  }

  _updateUsedNode(node: Node) {
    const { prev, next } = node;
    // Unlink node's nodes
    node.prev = null;
    node.next = null;
    if (prev) {
      const prev2 = prev.prev;
      // Unlink prev's nodes
      prev.prev = null;
      prev.next = null;


      node.next = prev;
      prev.prev = node;


      if (prev2) {
        node.prev = prev2;
        prev2.next = node;
      } else {
        this.head = node;
      }

      if (next) {
        prev.next = next;
        next.prev = prev;
      } else {
        this.tail = prev;
      }
    } else {
      if (next) {
        node.next = next;
      } else {
        this.head = node;
        this.tail = node;
      }
    }
  }

  _removeLCU() {
    const { prev, key } = this.tail;
    /* console.log(`key ${key} evicted`); */
    delete this.cache[key];
    prev.next = null;
    this.tail = prev;
  }

  __describeNode() {
    let cur = this.head;
    const values = [];
    const keys = [];
    for (let i = 0; i < 10; i++) {
      if (!cur) break;
      keys.push(cur.key);
      values.push(this.cache[cur.key].value);
      cur = cur.next;
    }
    console.log("KEY  :", keys.map(x => `[${chalk.yellow(String(x).padEnd(2))}]`).join("-"));
    console.log("VALUE:", values.map(x => `[${chalk.green(String(x).padEnd(2))}]`).join("-"));
  }

  get(key: number) {
    this.__describeNode();
    console.log(`get(${key})`);
    const item = this.cache[key];
    if (item) {
      this._updateUsedNode(item.node);
      return item.value;
    } else {
      /* console.log(`get(${key}): -1`); */
      return -1;
    }
  }

  put(key: number, value: number) {
    this.__describeNode();
    console.log(`put(${key})`);
    let item = this.cache[key];
    if (!item) {
      const node: Node = { key, next: null, prev: null };
      item = { node, value };
      this.cache[key] = item;
      if (this.head) {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      } else {
        this._updateUsedNode(node);
      }
      if (this.used === this.capacity) {
        this._removeLCU();
      } else {
        this.used++;
      }
    } else {
      item.value = value;
      this._updateUsedNode(item.node);
    }
  }
}

const expected = [undefined, undefined, undefined, undefined, undefined, undefined, -1, undefined, 19, 17, undefined, -1, undefined, undefined, undefined, -1, undefined, -1, 5, -1, 12, undefined, undefined, 3, 5, 5, undefined, undefined, 1, undefined, -1, undefined, 30, 5, 30, undefined, undefined, undefined, -1, undefined, -1, 24, undefined, undefined, 18, undefined, undefined, undefined, undefined, -1, undefined, undefined, 18, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, 18, undefined, undefined, -1, undefined, 4, 29, 30, undefined, 12, -1, undefined, undefined, undefined, undefined, 29, undefined, undefined, undefined, undefined, 17, 22, 18, undefined, undefined, undefined, -1, undefined, undefined, undefined, 20, undefined, undefined, undefined, -1, 18, 18, undefined, undefined, undefined, undefined, 20, undefined, undefined, undefined, undefined, undefined, undefined, undefined];

const executor = (commands: string[], args: number[][]) => {
  const cache = new LRUCache(args[0][0]);
  commands.forEach((command, i) => {
    if (i == 0) return;
    const arg = args[i];
    const result = eval(`cache.${command}(...${JSON.stringify(arg)})`);
    console.log("EXPECTED::", expected[i]);
    console.log("RESULT  ::", result, result === expected[i] ? chalk.green("success!!") : chalk.red("fail"));

  });
  return true;
};

export default {
  "default": executor,
  executor,
};
