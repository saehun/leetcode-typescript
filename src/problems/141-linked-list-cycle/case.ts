interface LinkedList {
  val: number;
  next: LinkedList;
}

const case00: LinkedList = { val: 3, next: null };
const case01: LinkedList = { val: 2, next: null };
const case02: LinkedList = { val: 0, next: null };
const case03: LinkedList = { val: 4, next: null };
case00.next = case01;
case01.next = case02;
case02.next = case03;
case03.next = case01;

const case10: LinkedList = { val: 1, next: null };
const case11: LinkedList = { val: 2, next: null };
case10.next = case11;
case11.next = case10;

const case20: LinkedList = { val: 1, next: null };

const case30: LinkedList = { val: 1, next: null };
const case31: LinkedList = { val: 2, next: null };
case30.next = case31;

export default [
  { input: [case00], output: true },
  { input: [case10], output: true },
  { input: [case20], output: false },
  { input: [case30], output: false },
];
