//구조분해할당 Destructuring Assignments
//데이터 뭉치(그룹화)를 쉽게 만들 수 있다.
const fruits=['apple','strawberry','melon','lemon'];

const [first,second,...others]=fruits;
console.log(first);
console.log(second);
console.log(others);

const point=[2,3]
const [x,y,z=0]=point
console.log(x)
console.log(y)
console.log(z)


//객체에서도 쉽게 구조분해할당 가능

const park = {
    name:"찬욱",
    age:"50",
    job:"director"
}

const {name,age,job:occupation}=park;
console.log(name);
console.log(age);
console.log(occupation);
