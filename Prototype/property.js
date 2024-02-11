const dog = {name:'코비', age:10}

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

console.log('name' in dog);
console.log(dog.hasOwnProperty('name'));

//오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라는 객체로 저장됨

const des = Object.getOwnPropertyDescriptors(dog);
console.log(des);

const desc = Object.getOwnPropertyDescriptor(dog,'name')
console.log(desc);

//아래와 같이 프로퍼티 수정 가능하다.
Object.defineProperty(dog,'name', {
    value: '멍멍',
    writable: false,
    enumerable: false,
    configurable: false
});

console.log(dog.name);