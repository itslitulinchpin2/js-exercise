// {key:value}의 형태

//원시타입은 메모리셀에 값 자체가 들어간다. 글로벌: 데이터, 로컬:  스택에 잡힘
//객체타입은 힙에 잡힌다. (동적)

let name='apple';
let color='red';

let orangeName='orange';

//객체의 장점: 연관된 데이터를 모아서 관리함
let apple = {
    name:'apple',
    color:'red'
}
console.log(apple)
console.log(apple.color)



