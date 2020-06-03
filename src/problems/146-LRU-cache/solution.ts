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



class LRUCache {
  capacity: number;
  table: Record<number, number>;
  stack: number[];

  constructor(capacity: number) {
    this.capacity = capacity;
    this.table = {};
    this.stack = [];
  }

  get(key: number): number {
    if (key in this.table) {
      this.stack = this.stack.filter(x => x !== key);
      this.stack.push(key);

      return this.table[key];
    } else {
      return -1;
    }
  }

  put(key: number, value: number) {
    if (!(key in this.table)) {
      this.stack.push(key);
      if (this.stack.length > this.capacity) {
        delete this.table[this.stack[0]];
        this.stack = this.stack.slice(1);
      }
    } else {
      this.stack = this.stack.filter(x => x !== key);
      this.stack.push(key);
    }
    this.table[key] = value;
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
