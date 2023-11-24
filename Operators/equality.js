//동등 비교 관계 연산자
// == 값이 같음
//!= 값이 다름
//===값과 타입이 모두 같음
//!== 값과 타입이 다름

console.log(2=='2') //true
console.log(2==='2') //false
console.log(true==1) //true

const obj1={
    name:'js'
}
const obj2={
    name:'js'
}

console.log(obj1==obj2) //false
//왜냐하면 메모리셀에 저장된 주소가 서로 다르기 때문.

let obj3=obj2
console.log(obj3===obj2) //true