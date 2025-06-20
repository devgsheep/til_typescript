let numA = 5;
let numB = 8;
const resultPlus = numA + numB;
const resultMinus = numA - numB;
const resultDevide = numA / numB;
const resultMulti = numA * numB;
/**
 * 사칙연잔 함수
 * - 숫자 2개를 입력하시면 결과가 나옵니다.
 * - 기호는 4가지(+, -, *, /)를 사용하실수 있습니다.
 *
 * 사용 예시
 * ```javascript
 * const result = calc(5, 4, "+");
 * ```
 * @param {number} a
 * @param {number} b
 * @param {string} sign
 * @returns {number}
 */
function calc(a, b, sign) {
    let result;
    switch (result) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
        default:
            console.log("결과값오류");
            break;
    }
    return result;
}
const result = calc(7, 10, "*");
export {};
//
