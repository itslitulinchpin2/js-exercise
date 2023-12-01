//Spread 연산자, 전개구문
//모든 이터러블은 스프레드 할 수 있다.
//func(...iterable)
//[...iterable]
//{...obj}
//촤르르 촤르르 풀어서 새롭게 복사
//ECMAScript 2018

function add(a,b,c){
    return a+b+c;
}
const nums=[1,2,3]
console.log(add(...nums))

function sum(first,second,...rest){
    console.log(rest);
}

sum(1,2,3,4,5,6); // [3,4,5,6]
