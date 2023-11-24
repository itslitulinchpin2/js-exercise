let integer=123;
let negative=-123;
let double = 1.23;
let binary=0b1111011; //2진수
let ocal=0o173;//8진수
let hex=0x7b;//16진수
//js에서는 실수형, 정수형을 구분할 필요가 없이 그냥 number type.

console.log(123/0) //Infinity
console.log(-123/0) //-Infinity
console.log(0/'text') // NaN(Not a Number)

//정말 큰 숫자를 나타내고 싶을때는 마지막에 n을 붙인다. bigInt type.