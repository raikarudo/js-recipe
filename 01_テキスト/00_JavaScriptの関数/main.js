// TRY: 練習問題 １
const plus1 = function (x) {
  return x + 1
}
plus1(1) //2
// 関数名:
// 引数:
// 返り値:

// TRY: 練習問題 ２
// f1: 1, 4, 7, 10, 13, 16, ...
function f1(n) {
  return n * 3 - 2
}
// f2: 1, 10, 100, 1000, 10000, ...
function f2(n) {
  return 10 ** (n - 1)
}
// f3: 2, 14, 107, 1010, 10013, ...
function f3(n) {
  return f1(n) + f2(n)
}
// TRY: 練習問題３
// ① ２つの引数を受け取り、それらをかけ合わせた値を返す関数 multiply を作成して正しく動くかテストしてください。
function multiply(x, y) {
  return x * y
}
// ② ２つの引数を受け取り、それらを足し合わせた結果を四捨五入した値を返す関数 plusRound を作成して正しく動くかテストしてください。
function plusRound(x, y) {
  return Math.round(x + y)
}
