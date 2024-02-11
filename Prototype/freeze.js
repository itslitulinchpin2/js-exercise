// 동결! Object.freeze
//추가, 삭제, 쓰기, 재정의 불가능!
//단, 얕은 freeze임!. 
const lee = { name: 'lee'}
const dog = { name: 'kove', age: 10};

Object.freeze(dog);
dog.name='멍멍'; // freeze했으므로 수정은 안됨
console.log(dog);
dog.age = 5; //마찬가지로 수정안됨
console.log(dog);

//밀봉! Object.seal
//값의 수정만 가능. 키의 추가,삭제,속성 재정의 불가능
const cat = {};
Object.assign(cat,dog) //복사, {...dog}와 같은 기능
console.log(cat);
Object.seal(cat);
cat.name="야옹"; //값으 수정이 가능!
console.log(cat);
delete cat.age; // 키 삭제는 불가능!
console.log(cat);

//동결, 밀봉 확인
console.log(Object.isFrozen(dog));
console.log(Object.isSealed(cat));

//확장 금지(추가 금지) preventExtensions
const tiger = {name: '호랑이'};
Object.preventExtensions(tiger); //확장이 불가능하게 만들기
console.log(Object.isExtensible(tiger));//false
tiger.name = '어흥'; //수정은 가능, 삭제도 가능, 추가는 안됨
console.log(tiger.name);