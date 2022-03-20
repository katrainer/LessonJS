// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
//
//     Например:
//
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте три варианта решения:
//
//     С использованием цикла.
//     Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
//     С использованием формулы арифметической прогрессии.

// const sumTo = (n) => {
//     let a = []
//     while (n>0){
//         a.push(n)
//         n--
//     }
//     return a.reduce((a, b) => a + b)
// }

// const sumTo = (n) => {
//     if (n===1) {
//         return n
//     }else {
//         return n + sumTo(n - 1)
//     }
// }

const factorial = (n) => {
    if (n===1) {
        return n
    }else {
        return n * factorial(n - 1)
    }
}