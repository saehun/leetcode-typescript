class LRUCache2 {
  capacity: number;
  cache: Map<number, number>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key: number) {
    const value = this.cache.get(key);
    if (value) {
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    } else {
      return -1;
    }
  }

  put(key: number, value: number) {
    this.cache.delete(key);
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
  }
}

interface Node<T> {
  value: T;
  key: number;
  before: Node<T>;
  next: Node<T>;
}

class DoubleLinkedList<T> {
  head: Node<T>;
  tail: Node<T>;
  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  pushHead(key: number, value: T): Node<T> {
    const node: Node<T> = {
      before: null,
      next: null,
      value,
      key,
    };
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      const head = this.head;
      this.head = node;
      node.next = head;
      head.before = node;
    }
    this.size++;
    return node;
  }

  removeTail(): Node<T> {
    const { tail } = this;
    if (!tail) return;
    this.remove(tail);
    return tail;
  }

  remove(node: Node<T>) {
    const { next, before } = node;
    if (next) {
      if (before) {
        before.next = next;
        next.before = before;
      } else {
        // node === head
        next.before = null;
        this.head = next;
      }
    } else {
      if (before) {
        // node === tail
        before.next = null;
        this.tail = before;
      } else {
        // node === head && node === tail
        this.head = null;
        this.tail = null;
      }
    }
    this.size--;
  }

}


class LRUCache {
  capacity: number;
  cache: Record<number, Node<number>>;
  list: DoubleLinkedList<number>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = {};
    this.list = new DoubleLinkedList<number>();
  }

  get(key: number): number {
    const node = this.cache[key];
    if (node) {
      if (!(this.list.head === node)) {
        this.list.remove(node);
        this.cache[key] = this.list.pushHead(node.key, node.value);
      }
      return node.value;
    } else {
      return -1;
    }
  }

  put(key: number, value: number) {
    if (key in this.cache) {
      this.list.remove(this.cache[key]);
    }

    this.cache[key] = this.list.pushHead(key, value);
    if (this.list.getSize() > this.capacity) {
      const { key } = this.list.removeTail();
      delete this.cache[key];
    }
  }
}


const executor = (commands: string[], args: number[][]) => {
  const cache = new LRUCache(args[0][0]);
  commands.forEach((command, i) => {
    if (i == 0) return;
    const arg = args[i];
    eval(`cache.${command}(...${JSON.stringify(arg)})`);
  });
  return true;
};

export default {
  "default": executor,
  executor,
  validator: (x: any) => x,
};
