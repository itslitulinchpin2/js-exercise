const fruits = ['banana','apple','strawberry','melon'];

for (let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//굳이 for문을 안쓰고?
//forEach는 배열 요소별로 반복된다.
fruits.forEach(function(value,index,array){
    console.log(value);
    console.log(index);
    console.log(array);
    console.log("--------------")

})

fruits.forEach(value=>console.log(value));

//조건에 맞는 (콜백함수) 아이템 찾기
//find: 제일 먼저 조건에 맞는 아이템을 반환
const pizza = {name:'pizza', price:2}
const ramen = {name:'ramen', price:3}
const sushi = {name:"sushi", price:3}

const foods=[pizza,ramen,sushi];

let result = foods.find((value)=>{
    return value.name==='pizza'
    //반환하는 것은 객체 그 자체이다.
})
console.log(result);

//findIndex: 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
const resultIndex = foods.findIndex((value)=>{
    return value.name==='ramen'
    //반환하는 것은 배열에서의 인덱스다.
})
console.log(resultIndex)

//배열의 아이템들이 부분적으로 조건에(콜백함수)에 맞는지 확인

let resultBoolean=foods.some((item)=>item.name=='sushi')

console.log(resultBoolean);

//배열의 아이템들이 전부 조건에 맞는지 확인

resultBoolean=foods.every((item)=>item.name=='sushi')

console.log(resultBoolean);

//조건에 맞는 모든 아이템들을 새로운 배열로!
//filter의 반환값은 배열이다.
const result2 = foods.filter((item)=>item.price==3)
console.log(result2);