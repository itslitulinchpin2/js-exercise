//map [키,값]

const map = new Map([
    ['key1', 'apple'],
    ['key2','banana']
]);

console.log(map);
console.log(map.size);
console.log(map.has('key1'));

//순회
map.forEach((value,key)=>console.log(key,value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

//찾기
console.log(map.get('key1'));

//추가
map.set('key3','watermelon');
console.log(map);

//삭제
map.delete('key3');
console.log("______________________")
//object와의 차이점?
const key = {name:'milk', price:10}
const milk = {name:'milk',price:10,desc:"This is milk"};
const obj = {
    [key]: milk,
};
console.log(obj);

const map2 = new Map([[key,milk]]);
console.log(map2);

//map에서는 forEach사용 가능하지만, 오브젝트에서는 불가능
//맵에서는 obj[key]처럼 동적 접근이 불가능
//obj.get(key)로 접근해야함.




