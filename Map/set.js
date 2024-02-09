//Map and Set Directory

const set = new Set([1,2,3])
console.log(set);
console.log(set.size);
console.log(set.has(2));

//순회
set.forEach(item=>console.log(item))
for(const value of set.values()){
    console.log(value);
}

set.add(6);
console.log(set);

//삭제
set.delete(6);
console.log(set);

//전부삭제
set.clear();

//object set
const obj1 = {name:"park", age:10}
const obj2= {name:"kim",age:23};
const objs = new Set([obj1,obj2]);
console.log(objs);
//Set(2) { { name: 'park', age: 10 }, { name: 'kim', age: 23 } }

//obj는 shallow copy가 된다.

obj1.age=40;
objs.add(obj1);
console.log(objs);
//age10인 객체는 보여지지 않는다. 쉘로우 카피이기 때문.

obj3 = {name:"kim",age:23};

objs.add(obj3);
console.log(objs);
//  {
//     { name: 'park', age: 40 },
//     { name: 'kim', age: 23 },
//     { name: 'kim', age: 23 }
//   }
//똑같은 객체가 추가가 된다!
//메모리의 참조주소가 다르기 때문!!!




