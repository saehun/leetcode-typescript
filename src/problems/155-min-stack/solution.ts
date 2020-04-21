class MinStack {
  arr: number[];
  min: number;


  constructor() {
    this.arr = [];
    this.min = undefined;
  }

  push(n: number) {
    if (!this.arr.length) {
      this.arr.push(n);
      this.min = n;
    } else if (n <= this.min) {
      this.arr.push(2 * n - this.min);
      this.min = n;
    } else {
      this.arr.push(n);
    }
  }

  pop() {
    const value = this.top();
    if (value <= this.min) {
      this.min = 2 * value - this.arr[this.arr.length - 1];
    }
    this.arr.pop();
  }

  getMin() {
    return this.min;
  }

  top() {
    return Math.max(this.min, this.arr[this.arr.length - 1]);
  }
}

const run = () => {
  const ms = new MinStack();
  ms.push(-2);
  console.log(ms.arr, ms.min);
  ms.push(0);
  console.log(ms.arr, ms.min);
  ms.push(-3);
  console.log(ms.arr, ms.min);
  console.log(ms.getMin());
  ms.pop();
  console.log(ms.arr, ms.min);
  console.log(ms.top());
  console.log(ms.arr, ms.min);
  console.log(ms.getMin());
  console.log(ms.arr, ms.min);
  ms.pop();
  console.log(ms.arr, ms.min);
  ms.pop();
  console.log(ms.arr, ms.min);

  return true;
};

export default {
  "default": run,
  validator: (x: any) => x,
};
