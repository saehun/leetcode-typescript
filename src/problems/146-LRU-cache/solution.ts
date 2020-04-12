
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
    this.head = { key: -2, next: null, prev: null };
    this.tail = { key: -3, next: null, prev: this.head };
    this.head.next = this.tail;
  }

  get(key: number) {
    console.log("head:", this.head.next?.key, "tail:", this.tail.prev?.key);
    const item = this.cache[key];
    if (item) {
      const { prev, next } = item.node;
      prev.next = next;
      item.node.next = prev;
      if (prev.prev) {
        prev.prev.next = item.node;
      }
      prev.prev = item.node;
      if (next) next.prev = prev;
      console.log(`get(${key}): ${item.value}`);
      return item.value;
    } else {
      console.log(`get(${key}): -1`);
      return -1;
    }
  }

  put(key: number, value: number) {
    console.log("head:", this.head.next?.key, "tail:", this.tail.prev?.key);
    let item = this.cache[key];
    if (item) {
      this.get(key);
      item.value = value;
      console.log(`put(${key}, ${value}). item exist`);
      return;
    }

    console.log(`put(${key}, ${value}).`);
    const node: Node = { key, next: this.head.next, prev: this.head };
    item = { node, value };
    this.cache[key] = item;
    this.head.next = node;

    if (!this.tail.prev) {
      this.tail.prev = node;
    }

    if (this.capacity === this.used) {
      const leastUsedNode = this.tail.prev;
      console.log(`evicts key ${leastUsedNode.key}`);
      delete this.cache[leastUsedNode.key];
      this.tail.prev = this.tail.prev.prev;
    } else {
      this.used++;
    }
  }
}

const executor = (capacity: number, ...scripts: string[]) => {
  const cache = new LRUCache(capacity);
  scripts.forEach((line) => {
    eval(line);
  });
  return true;
};

export default {
  "default": executor,
  executor,
};
