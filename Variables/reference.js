//원시타입은 값이 복사되어 전달됨
let a=1;
let b=a;
b = 2;

console.log(a);
console.log(b);

//객체는 참조값 (메모리 주소)가 복사되어 전달됨
let apple={
    name:"사과"
}
let orange = apple

orange.name="오렌지"

console.log(apple) //apple의 name값도 변경된다!
console.log(orange)