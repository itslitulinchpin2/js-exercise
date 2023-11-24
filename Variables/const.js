//const는 재할당이 불가능한 상수이다.
//1. 상수
//2. 상수변수 또는 변수


let a = 1;
a = 2;

const text='hi' //상수변수는 재할당이 불가능

//상수는 대문자로 세팅하자
const MAX_FRUITS = 5;

const apple={
    name:'apple',
    color:'red'
}
console.log(apple)

apple.color='green'
console.log(apple.color)
//const를 선언해도 객체의 color값이 변하는 이유?
//객체를 const선언하면 메모리셀에 주소가 저장된다. 이 주소가 불변할 뿐,
//이 주소에 해당하는 키의 value값은 변할 수 있다.