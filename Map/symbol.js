//symbol
//유일한 키를 생성할 수 있음
const map = new Map();
const key1 = 'key';
const key2 = 'key';

map.set(key1,'hello');
console.log(map.get(key2));
//key값이 동일하므로 hello를 출력함
//심벌을 사용하면 다르게 처리 가능하다.

const key3 = Symbol('key');
const key4 = Symbol('key');
const map2 = new Map();
map2.set(key3,'hi');
console.log(map2.get(key4));
//undefined
console.log(key3===key4)
//false

//심볼 처리하면 값이 같아도 다르게 취급된다.


//동일한 심볼을 만들고 싶다면? Symbol.for를 사용
const k1 = Symbol.for('key!');
const k2 = Symbol.for('key!');

console.log(k1===k2);
//true
console.log(Symbol.keyFor(k1));
//key!

