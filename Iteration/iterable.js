//Iterable 하다는것! 순회가 가능하다는 것!
//[Symbol.iterator]() : Iterator를 반환하면
//심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는 것은
//순회가 가능한 객체라는 뜻.
//순회가 가능하면 무엇을 할 수 있나?
//for...of, spread
const array=[1,2,3];
for(const item of array){
    console.log(item);
}

const obj = {
    0:1,
    1:2
}

/*
object는 iterable하지 않으므로, 아래는 불가능하다.
for (const item of obj){
    console.log(item);
}
*/

//대신 for...in은 사용 가능하다.
for(const item in obj){
    console.log(item)
}

const iterator=array.values();
/*
console.log(iterator.next()); //{ value: 1, done: false }
console.log(iterator.next().value);
console.log(iterator.next().done);
console.log(iterator.next().done);
*/
//위와 아래는 같은 코드다.
while(true){
    const item = iterator.next();
    if(item.done) break;
    console.log(item.value);
}