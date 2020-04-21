# Min Stack
[link](https://leetcode.com/problems/min-stack);

## Acknowledgement
Space, Time complexity를 고려할 때 여러가지 구현 방법이 있다.

-2 -> 0 -> -3 -> 4 -> -5라고 했을 때,
-2 -> 0 -> -2 -> -3 -> 4 -> -3 -> -5 처럼 Min value의 구간 끝을 그 값으로 감싸주는 방법이 있고

[-2, -2] -> [0, -2] -> [-3, -3] -> [4, -3] -> [-5, -5] 처럼 튜플로 저장하는 방법도 있다.

즉 어떤 min value가 그 다음 min value가 등장하는 부분까지 정보를 어떻게 전달하느냐의 문제.

수학적인 해결방법이 있다.

-2 -> 0 -> -3에서 -3이 등장하기 전까지 min value는 -2, 이후에는 -3이 된다.
이 때 -3을 push하지 말고 min value에 -3을 저장한 다음 -3 * 2 - (-2)를 저장하는 것이다.
즉 어떤 min 값이 존재하는 구간에 있는 모든 값들은 2*min - last min (because lastMin > currentMin) 보다 크다고 할 수 있다.
