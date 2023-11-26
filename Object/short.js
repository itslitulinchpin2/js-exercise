const name='lee';
const age=23;

//만들고자 하는 키의 값이 지역변수명과 동일하다면,
//아래와 같이 숏코딩이 가능하다.

function makeObj(name,age){
    return {
        name,age
    }
}

const obj=makeObj(name,age)
console.log(obj);
