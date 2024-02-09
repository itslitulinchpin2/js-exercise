//logical operator 활용
//&& || 
//단축평가 : short-circuit evaluation! 조건문 안과 밖에서 다름.

const obj1={name:'kobe'};
const obj2={name:'pipi', owner:'lee'};

//조건문 안에서는 둘 다 불리언 값으로 반환되어 계산됨
if (obj1 && obj2){
    console.log('둘 다 true')
}

//조건문 밖에서는 obj1이 true이므로, obj2를 result에 할당함
let result = obj1&&obj2;
console.log(result);
//or 연산자도 마찬가지임. 단, obj1이 할당됨

//활용
//&& : truthy일때 뭔가 해야하는 경우
//|| : falsy일때 뭔가 해야하는 경우

function changeOwner(animal){
    if(!animal.owner){
        throw new Error('app이 crash됨');
    } else{
    animal.owner='바뀐 주인';
    }
}

function newOwner(animal){
    if(animal.owner){
        throw new Error('이미 주인이 있어');
    } else{
    animal.owner='새 주인';
    }
}
console.log("__________________________")
obj1.owner && changeOwner(obj1); //함수가 실행되지 않음
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);
obj2.owner='원래주인';
console.log("__________________________")
obj1.owner || newOwner(obj1); 
obj2.owner || newOwner(obj2); //함수가 실행되지 않음
console.log(obj1);
console.log(obj2);

//null 또는 undefined인 경우를 확인할때
let item;
const price= item && item.price;
console.log(item);

//기본 값을 설정할때
//디폴트 파라미터의 경우 undefined인 경우에만 가능
//||연산자를 사용하면 falsy한 모든 경우에 대해 기본 값 설정 가능.
function print(msg){
    const text = msg || 'hello'
    console.log(text);
}

print();