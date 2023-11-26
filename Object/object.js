//Object literal { key : value}
//new Object();
//Object.create();


//객체의 키 값은 숫자, 문자, 문자열, 대괄호 모두 가능하다.
let apple = {
    name:'apple',
    'hello-bye':'hello',
    0:1
}

//마침표 표기법: apple.name
//대괄호 표기법 : apple['hello-bye']
//대괄호 표기법을 이용할때에는 키값을 ''로 감싸주어야 한다.

console.log(apple['name']);

//객체 속성 추가하기
apple.color="red"

console.log(apple['color'])

//객체 속성 삭제하기
delete apple.color;
console.log(apple);