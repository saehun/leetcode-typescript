
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
        // Do nothing
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

  /*
  __describeNode() {
    let cur = this.head;
    const values = [];
    for (let i = 0; i < 10; i++) {
      if (!cur) break;
      values.push(this.cache[cur.key].value);
      cur = cur.next;
    }
    return values.join("-");
  }
  */

  get(key: number) {
    /* console.log(`get(${key})   ::`, this.__describeNode(), "head:", this.head?.key, "tail:", this.tail?.key); */
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
    /* console.log(`put(${key}, ${value})::`, this.__describeNode(), "head:", this.head?.key, "tail:", this.tail?.key); */
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
