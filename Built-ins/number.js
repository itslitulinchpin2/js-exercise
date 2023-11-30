const num1=123;
const num2= new Number(123);
console.log(typeof(num1));
console.log(typeof(num2));

//지수 표기법 ( 매우 크거나 작은 숫자를 표기시)
const num3=102;
console.log(num3.toExponential());

//반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());

console.log(num4.toString());

//원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));

//Number.EPSILON은 0과 1 사이에서 나타낼 수 있느 가장 작은 숫자임.
//부동소숫점이 정확히 고려되지 않은 수의 비교를 다룰때 유용함.
