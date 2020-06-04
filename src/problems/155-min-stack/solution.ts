class MinStack {
  arr: number[];
  min: number;


  constructor() {
    this.arr = [];
    this.min = undefined;
  }

  push(n: number) {
    if (this.min == undefined) {
      this.min = n;
    } else {
      if (this.min >= n) {
        this.arr.push(this.min);
        this.min = n;
      }
    }
    this.arr.push(n);
  }

  pop() {
    const val = this.arr.pop();
    if (this.arr.length === 0) {
      this.min = undefined;
    } else {
      if (val === this.min) {
        this.min = this.arr.pop();
      }
    }
    return val;
  }

  getMin() {
    return this.min;
  }

  top() {
    return this.arr[this.arr.length - 1];
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
